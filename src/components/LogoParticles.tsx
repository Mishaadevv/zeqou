import { useEffect, useRef, useState } from 'react';

interface Particle {
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  speed: number;
  accent: boolean;
  alpha: number;
}

const SIZE = 400; // logical canvas units; CSS scales it responsively
const SAMPLE = 120; // offscreen sampling resolution — lower = fewer dots
const MAX_PARTICLES = 650;

/**
 * The Zeqou X logo, rebuilt from living particles.
 *
 * Samples the real brand image pixel-by-pixel, so the dots hold the exact
 * shape of the logo. Near the cursor the mark falls apart, far away it
 * rebuilds itself. Falls back to the static image if anything goes wrong.
 */
export function LogoParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setFailed(true);
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const interactive = !reduced;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const styles = getComputedStyle(document.documentElement);
    const colors = {
      accent: styles.getPropertyValue('--accent').trim() || '#8b5cf6',
      // theme-aware dots: near-white on dark, near-black on light (no card now)
      dot: styles.getPropertyValue('--text').trim() || '#fafafa',
    };

    let particles: Particle[] = [];
    let raf = 0;
    let mx = -9999;
    let my = -9999;
    let cancelled = false;

    const toParticles = (kept: { x: number; y: number }[]) => {
      // thin out evenly if the logo yields too many lit pixels
      const stride = Math.max(1, Math.floor(kept.length / MAX_PARTICLES));
      const picked = kept.filter((_, i) => i % stride === 0);
      particles = picked.map((p) => ({
        hx: p.x,
        hy: p.y,
        x: p.x + (Math.random() * 2 - 1) * 24,
        y: p.y + (Math.random() * 2 - 1) * 24,
        vx: 0,
        vy: 0,
        r: 0.7 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1,
        accent: Math.random() < 0.22,
        alpha: 0.55 + Math.random() * 0.45,
      }));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      for (const p of particles) {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.accent ? colors.accent : colors.dot;
        ctx.beginPath();
        ctx.arc(p.hx, p.hy, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const RADIUS = 110;
    const tick = (t: number) => {
      if (cancelled) return;
      ctx.clearRect(0, 0, SIZE, SIZE);
      const time = t / 1000;
      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < RADIUS && dist > 0.01) {
          const force = ((RADIUS - dist) / RADIUS) * 3.4;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
          p.vx += (-dy / dist) * force * 0.2;
          p.vy += (dx / dist) * force * 0.2;
        }
        p.vx += (p.hx - p.x) * 0.03;
        p.vy += (p.hy - p.y) * 0.03;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx + Math.sin(time * p.speed + p.phase) * 0.22;
        p.y += p.vy + Math.cos(time * p.speed * 0.8 + p.phase) * 0.22;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.accent ? colors.accent : colors.dot;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    // Map client coords into the 400-unit space (CSS may scale the canvas).
    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((clientX - rect.left) / rect.width) * SIZE,
        y: ((clientY - rect.top) / rect.height) * SIZE,
      };
    };
    const onMove = (event: MouseEvent) => {
      const local = toLocal(event.clientX, event.clientY);
      // react a bit beyond the edges so the mark shivers before touch
      mx = local.x;
      my = local.y;
    };
    const onLeave = () => {
      mx = -9999;
      my = -9999;
    };

    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      try {
        const off = document.createElement('canvas');
        off.width = SAMPLE;
        off.height = SAMPLE;
        const offCtx = off.getContext('2d', { willReadFrequently: true });
        if (!offCtx) {
          setFailed(true);
          return;
        }
        offCtx.drawImage(img, 0, 0, SAMPLE, SAMPLE);
        const data = offCtx.getImageData(0, 0, SAMPLE, SAMPLE).data;
        const kept: { x: number; y: number }[] = [];
        for (let sy = 0; sy < SAMPLE; sy++) {
          for (let sx = 0; sx < SAMPLE; sx++) {
            const i = (sy * SAMPLE + sx) * 4;
            // the mark is a bright X on a near-black card
            if (data[i] + data[i + 1] + data[i + 2] > 420) {
              kept.push({
                x: ((sx + 0.5) / SAMPLE) * SIZE,
                y: ((sy + 0.5) / SAMPLE) * SIZE,
              });
            }
          }
        }
        if (kept.length < 60) {
          setFailed(true);
          return;
        }
        toParticles(kept);
        if (interactive) {
          raf = requestAnimationFrame(tick);
          window.addEventListener('pointermove', onMove, { passive: true });
          document.documentElement.addEventListener('mouseleave', onLeave);
        } else {
          drawStatic();
        }
      } catch {
        setFailed(true);
      }
    };
    img.onerror = () => setFailed(true);
    img.src = './assets/branding/zeqou-x.png';

    const themeObserver = new MutationObserver(() => {
      const s = getComputedStyle(document.documentElement);
      colors.accent = s.getPropertyValue('--accent').trim() || colors.accent;
      colors.dot = s.getPropertyValue('--text').trim() || colors.dot;
      if (!interactive && particles.length > 0) drawStatic();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (failed) {
    return (
      <img
        src="./assets/branding/zeqou-x.png"
        alt="Zeqou X brand mark"
        width={400}
        height={400}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="logo-particles"
      role="img"
      aria-label="Zeqou X brand mark made of living particles"
    />
  );
}
