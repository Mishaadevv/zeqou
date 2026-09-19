import { useEffect } from 'react';

/**
 * Interactive cursor layer: a soft spotlight that follows the pointer
 * + a subtle magnetic pull on interactive elements.
 *
 * - pointer-events: none, never blocks clicks
 * - disabled on touch devices and prefers-reduced-motion
 * - no dependencies, one rAF loop
 */
export function CursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let active = false;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!active) {
        active = true;
        root.classList.add('cursor-active');
      }
      // Magnetic pull for nearby interactive elements
      const el = (event.target as HTMLElement).closest?.(
        'a.btn, button.btn, .doc-card, .hero-mark img',
      ) as HTMLElement | null;
      // clear previous magnetic transforms
      for (const node of document.querySelectorAll<HTMLElement>('[data-magnet]')) {
        if (node !== el) {
          node.style.translate = '';
          node.removeAttribute('data-magnet');
        }
      }
      if (el && (el.classList.contains('btn') || el.classList.contains('doc-card'))) {
        const rect = el.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        // small pull, max ~6px
        const pullX = Math.max(-6, Math.min(6, dx * 0.08));
        const pullY = Math.max(-6, Math.min(6, dy * 0.12));
        el.style.translate = `${pullX.toFixed(1)}px ${pullY.toFixed(1)}px`;
        el.setAttribute('data-magnet', 'true');
      }
    };

    const onLeave = () => {
      active = false;
      root.classList.remove('cursor-active');
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      root.style.setProperty('--cx', `${x.toFixed(1)}px`);
      root.style.setProperty('--cy', `${y.toFixed(1)}px`);
      raf = requestAnimationFrame(tick);
    };

    root.style.setProperty('--cx', `${x}px`);
    root.style.setProperty('--cy', `${y}px`);
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      root.classList.remove('cursor-active');
      for (const node of document.querySelectorAll<HTMLElement>('[data-magnet]')) {
        node.style.translate = '';
        node.removeAttribute('data-magnet');
      }
    };
  }, []);

  return <div className="cursor-spotlight" aria-hidden="true" />;
}
