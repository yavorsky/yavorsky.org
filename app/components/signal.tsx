'use client';

import { useEffect, useRef, useState } from 'react';
import { bands, bits, COLS, ROWS } from '@/app/message';

// The widths the line can be folded at. Only COLS gives the picture.
const MIN = 35;
const MAX = 53;
const TALLEST = Math.ceil(bits.length / MIN);
const AMBER = '#fbbf24';
const FADE = 140;

const total = bits.length.toLocaleString('en-US');

export function Signal({
  active,
  setActive,
}: {
  active: string | null;
  setActive: (section: string | null) => void;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [cell, setCell] = useState(7);
  const [width, setWidth] = useState(MAX);
  // How much of the line has arrived, 0 to 1.
  const [received, setReceived] = useState(0);
  const previous = useRef(MAX);
  const timers = useRef<number[]>([]);
  // Set once the visitor takes the fold control; the arrival stops there.
  const taken = useRef(false);
  const locked = width === COLS && received === 1;

  useEffect(() => {
    const element = frame.current!;
    const fit = () =>
      setCell(Math.max(3, Math.min(8, Math.floor(element.clientWidth / MAX))));
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // On arrival: the line comes in at the wrong width, then is folded one
  // column at a time, slowing, until it holds.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      previous.current = COLS;
      setWidth(COLS);
      setReceived(1);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const arrive = (now: number) => {
      if (taken.current) return;
      const part = Math.min(1, (now - start) / 1600);
      setReceived(part);
      if (part < 1) {
        raf = requestAnimationFrame(arrive);
        return;
      }
      let delay = 500;
      for (let w = MAX - 1; w >= COLS; w--) {
        timers.current.push(window.setTimeout(() => setWidth(w), delay));
        delay += 110 + (MAX - w) * 22;
      }
    };
    raf = requestAnimationFrame(arrive);
    const pending = timers.current;
    return () => {
      cancelAnimationFrame(raf);
      pending.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const element = canvas.current!;
    const ratio = window.devicePixelRatio || 1;
    const w = MAX * cell;
    const h = TALLEST * cell;
    element.width = w * ratio;
    element.height = h * ratio;
    const ctx = element.getContext('2d')!;
    ctx.scale(ratio, ratio);
    const ink = getComputedStyle(element).color;
    const band = locked ? bands.find((b) => b.section === active) : undefined;
    const shown = Math.floor(received * bits.length);

    const layer = (fold: number, alpha: number) => {
      const left = Math.round(((MAX - fold) * cell) / 2);
      const top = Math.round(
        ((TALLEST - Math.ceil(bits.length / fold)) * cell) / 2
      );
      for (let i = 0; i < shown; i++) {
        const x = left + (i % fold) * cell;
        const row = Math.floor(i / fold);
        const y = top + row * cell;
        if (bits[i]) {
          const lit = band && row >= band.from && row <= band.to;
          ctx.fillStyle = lit ? AMBER : ink;
          ctx.globalAlpha = alpha * (locked ? 1 : 0.7);
          ctx.fillRect(x, y, cell - 1, cell - 1);
        } else {
          ctx.fillStyle = ink;
          ctx.globalAlpha = alpha * 0.16;
          ctx.fillRect(
            x + Math.floor((cell - 1) / 2),
            y + Math.floor((cell - 1) / 2),
            1,
            1
          );
        }
      }
    };

    const from = previous.current;
    if (from === width) {
      ctx.clearRect(0, 0, w, h);
      layer(width, 1);
      return;
    }
    // One fold fades into the next.
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const part = Math.min(1, (now - start) / FADE);
      ctx.clearRect(0, 0, w, h);
      layer(from, 1 - part);
      layer(width, part);
      if (part < 1) raf = requestAnimationFrame(step);
      else previous.current = width;
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      previous.current = width;
    };
  }, [cell, width, received, active, locked]);

  const bandAt = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!locked) return undefined;
    const box = event.currentTarget.getBoundingClientRect();
    const left = Math.round(((MAX - COLS) * cell) / 2);
    const top = Math.round(((TALLEST - ROWS) * cell) / 2);
    const col = Math.floor((event.clientX - box.left - left) / cell);
    const row = Math.floor((event.clientY - box.top - top) / cell);
    if (col < 0 || col >= COLS) return undefined;
    return bands.find((b) => row >= b.from && row <= b.to);
  };

  const band = locked ? bands.find((b) => b.section === active) : undefined;
  const number = band ? bands.indexOf(band) + 1 : 0;

  return (
    <figure ref={frame} className="w-full max-w-[424px]">
      <canvas
        ref={canvas}
        role="img"
        aria-label={`A picture sent as a line of ${total} bits. Folded ${COLS} wide it shows the name Art Yavorsky, five pictures for the sections below, and a figure.`}
        className="block text-foreground"
        style={{
          width: MAX * cell,
          height: TALLEST * cell,
          cursor: band ? 'pointer' : 'default',
        }}
        onMouseMove={(event) => setActive(bandAt(event)?.section ?? null)}
        onMouseLeave={() => setActive(null)}
        onClick={(event) => {
          const hit = bandAt(event);
          if (hit) {
            document
              .getElementById(hit.section.toLowerCase())
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />
      <input
        type="range"
        className="fold mt-4 block"
        style={{ width: MAX * cell }}
        min={MIN}
        max={MAX}
        step={1}
        value={width}
        aria-label="Fold width"
        onChange={(event) => {
          taken.current = true;
          timers.current.forEach(clearTimeout);
          setReceived(1);
          setWidth(Number(event.target.value));
        }}
      />
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] tabular-nums">
        <span className="block text-muted-foreground" aria-live="polite">
          {band
            ? `${number.toString(2).padStart(3, '0')} · ${band.section}`
            : locked
              ? `${total} bits = ${COLS} × ${ROWS}`
              : `${total} bits · ${width} wide`}
        </span>
        <span className="mt-1 block text-muted-foreground/60">
          After the Arecibo message, 1974
        </span>
      </figcaption>
    </figure>
  );
}
