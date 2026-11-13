'use client';

import { useEffect, useRef } from 'react';
import { DOSES, makeSand, SAND } from '@/app/components/sand';

// One small plate, running the same sand as the homepage under one substance.
export function Figure({ dose }: { dose: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current!;
    const ctx = element.getContext('2d')!;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sand = makeSand(0.25);
    const { x, y } = sand;
    let S = 0;

    const draw = () => {
      ctx.clearRect(0, 0, S, S);
      ctx.fillStyle = SAND;
      ctx.globalAlpha = 0.85;
      for (let i = 0, n = sand.n; i < n; i++) {
        ctx.fillRect(x[i] * S, y[i] * S, 1, 1);
      }
      ctx.globalAlpha = 1;
    };

    const size = () => {
      const ratio = window.devicePixelRatio || 1;
      S = element.getBoundingClientRect().width;
      element.width = S * ratio;
      element.height = S * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    };

    // With motion reduced the sand is shown already settled, and holds still.
    if (still) for (let k = 0; k < 400; k++) sand.step(DOSES[dose]);
    size();

    // Only plates on screen are kept running.
    let seen = false;
    const watch = new IntersectionObserver(([entry]) => {
      seen = entry.isIntersecting;
    });
    watch.observe(element);

    let raf = 0;
    let then = 0;
    let owed = 0;
    const frame = (now: number) => {
      owed = Math.min(3, owed + (then ? (now - then) / (1000 / 60) : 1));
      then = now;
      if (seen) {
        while (owed >= 1) {
          sand.step(DOSES[dose]);
          owed--;
        }
        draw();
      } else owed = 0;
      raf = requestAnimationFrame(frame);
    };
    if (!still) raf = requestAnimationFrame(frame);

    window.addEventListener('resize', size);
    return () => {
      cancelAnimationFrame(raf);
      watch.disconnect();
      window.removeEventListener('resize', size);
    };
  }, [dose]);

  return <canvas ref={canvas} className="wall-figure" aria-hidden="true" />;
}
