import { useEffect, useRef } from 'react';

/**
 * Dot wave: a completely different mechanic from the particle swarms.
 * A calm grid of dots breathes in traveling sine waves, and the cursor
 * sends a ripple through it — dots near the pointer swell and light up
 * in accent color, then settle back.
 */
export function DotWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const styles = getComputedStyle(document.documentElement);
    const colors = {
      accent: styles.getPropertyValue('--accent').trim() || '#8b5cf6',
      dot: styles.getPropertyValue('--faint').trim() || '#55555e',
    };

    const GAP = 26;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let running = false;
    let mx = -9999;
    let my = -9999;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(w / GAP);
      rows = Math.floor(h / GAP);
    };

    const RADIUS = 130;
    const frame = (t: number) => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const time = t / 1000;
      const ox = (rect.width - (cols - 1) * GAP) / 2;
      const oy = (rect.height - (rows - 1) * GAP) / 2;

      for (let gx = 0; gx < cols; gx++) {
        for (let gy = 0; gy < rows; gy++) {
          const x = ox + gx * GAP;
          const y = oy + gy * GAP;
          // ambient traveling wave
          const wave =
            Math.sin(gx * 0.45 + time * 1.4) * Math.cos(gy * 0.5 + time * 0.9);
          let r = 1.4 + wave * 0.7;
          let lit = 0;

          const dx = x - mx;
          const dy = y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS) {
            const k = 1 - dist / RADIUS;
            // ripple ring expanding from the pointer
            const ring = Math.sin(dist * 0.09 - time * 6) * 0.5 + 0.5;
            r += k * (1.2 + ring * 2.2);
            lit = k;
          }

          ctx.globalAlpha = 0.35 + wave * 0.12 + lit * 0.5;
          ctx.fillStyle = lit > 0.25 ? colors.accent : colors.dot;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.6, r), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(frame);
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

    resize();
    if (reduced) {
      // single calm frame, mid-wave
      running = true;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const ox = (rect.width - (cols - 1) * GAP) / 2;
      const oy = (rect.height - (rows - 1) * GAP) / 2;
      ctx.fillStyle = colors.dot;
      for (let gx = 0; gx < cols; gx++) {
        for (let gy = 0; gy < rows; gy++) {
          const wave = Math.sin(gx * 0.45 + 1) * Math.cos(gy * 0.5 + 1);
          ctx.globalAlpha = 0.4;
          ctx.beginPath();
          ctx.arc(ox + gx * GAP, oy + gy * GAP, 1.4 + wave * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      running = false;
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const visibility = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    visibility.observe(canvas);
    const themeObserver = new MutationObserver(() => {
      const s = getComputedStyle(document.documentElement);
      colors.accent = s.getPropertyValue('--accent').trim() || colors.accent;
      colors.dot = s.getPropertyValue('--faint').trim() || colors.dot;
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      stop();
      observer.disconnect();
      visibility.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="dot-wave" aria-hidden="true" />;
}
