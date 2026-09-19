import { useEffect, useRef } from 'react';

interface Mote {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
  alpha: number;
  phase: number;
}

/**
 * Ambient particle field for the "Built in public" section.
 * Slow drifting motes that shy away from the cursor.
 * Pauses itself while offscreen; static dots on reduced motion.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue('--accent').trim() || '#8b5cf6';
    const dot = styles.getPropertyValue('--muted').trim() || '#8f8f98';

    let motes: Mote[] = [];
    let raf = 0;
    let running = false;
    let mx = -9999;
    let my = -9999;

    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(130, Math.max(40, (w * h) / 9000)));
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() * 2 - 1) * 0.25,
        vy: (Math.random() * 2 - 1) * 0.25,
        r: 0.8 + Math.random() * 1.6,
        accent: Math.random() < 0.3,
        alpha: 0.25 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const RADIUS = 120;
    const tick = (t: number) => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);
      const time = t / 1000;
      for (const m of motes) {
        const dx = m.x - mx;
        const dy = m.y - my;
        const dist = Math.hypot(dx, dy);
        if (!coarse && dist < RADIUS && dist > 0.01) {
          const force = ((RADIUS - dist) / RADIUS) * 1.6;
          m.vx += (dx / dist) * force;
          m.vy += (dy / dist) * force;
        }
        m.vx *= 0.985;
        m.vy *= 0.985;
        // keep a minimum drift so the field never fully sleeps
        if (Math.hypot(m.vx, m.vy) < 0.12) {
          m.vx += Math.sin(time * 0.6 + m.phase) * 0.01;
          m.vy += Math.cos(time * 0.5 + m.phase) * 0.01;
        }
        m.x += m.vx;
        m.y += m.vy;
        if (m.x < -10) m.x = w + 10;
        if (m.x > w + 10) m.x = -10;
        if (m.y < -10) m.y = h + 10;
        if (m.y > h + 10) m.y = -10;

        ctx.globalAlpha = m.alpha;
        ctx.fillStyle = m.accent ? accent : dot;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = event.clientX - rect.left;
      my = event.clientY - rect.top;
    };
    const onLeave = () => {
      mx = -9999;
      my = -9999;
    };

    seed();
    if (reduced) {
      // one static frame as pure decoration
      running = true;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const m of motes) {
        ctx.globalAlpha = m.alpha;
        ctx.fillStyle = m.accent ? accent : dot;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      running = false;
    }

    const observer = new ResizeObserver(seed);
    observer.observe(canvas);
    const visibility = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    visibility.observe(canvas);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      stop();
      observer.disconnect();
      visibility.disconnect();
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
