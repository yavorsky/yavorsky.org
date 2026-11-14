'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { DOSES, makeSand, SAND } from '@/app/components/sand';
import type { Work } from '@/app/works';

const ATOMS = ['C', 'H', 'Cl', 'F', 'N', 'O'];

function atoms(formula: string) {
  const count: Record<string, number> = {};
  for (const [, atom, n] of formula.matchAll(/([A-Z][a-z]?)(\d*)/g)) {
    count[atom] = Number(n || 1);
  }
  return count;
}

export type Room = { name: string; works: Work[] };

export function Plate({ about, rooms }: { about: ReactNode; rooms: Room[] }) {
  const names = ['About', ...rooms.map((room) => room.name)];
  const [section, setSection] = useState(0);
  const current = useRef(0);
  const canvas = useRef<HTMLCanvasElement>(null);
  const formula = useRef<HTMLDivElement>(null);
  const key = useRef<HTMLParagraphElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const shownAtoms = useRef<Record<string, number>>({});
  const resettle = useRef<() => void>(() => {});

  // The section lives in the address, so a section can be linked to.
  useEffect(() => {
    const read = () => {
      const wanted = window.location.hash.slice(1).toLowerCase();
      const index = names.findIndex((name) => name.toLowerCase() === wanted);
      setSection(Math.max(0, index));
    };
    read();
    window.addEventListener('hashchange', read);
    const step = (event: KeyboardEvent) => {
      const by =
        event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;
      if (!by || event.metaKey || event.ctrlKey || event.altKey) return;
      event.preventDefault();
      const next = (current.current + by + names.length) % names.length;
      window.history.replaceState(null, '', `#${names[next].toLowerCase()}`);
      setSection(next);
    };
    window.addEventListener('keydown', step);
    return () => {
      window.removeEventListener('hashchange', read);
      window.removeEventListener('keydown', step);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The formula is rebuilt atom by atom: each count runs from the last
  // substance's to this one's.
  useEffect(() => {
    current.current = section;
    resettle.current();
    const element = formula.current!;
    const from = shownAtoms.current;
    const to = atoms(DOSES[section].formula);
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    let raf = 0;
    const draw = (now: number) => {
      const part = still ? 1 : Math.min(1, (now - start) / 700);
      const eased = 1 - Math.pow(1 - part, 3);
      const at: Record<string, number> = {};
      element.innerHTML = ATOMS.map((atom) => {
        const a = from[atom] || 0;
        const count = Math.round(a + ((to[atom] || 0) - a) * eased);
        at[atom] = count;
        return count ? `${atom}${count > 1 ? `<i>${count}</i>` : ''}` : '';
      }).join('');
      shownAtoms.current = at;
      if (part < 1) raf = requestAnimationFrame(draw);
    };
    draw(start);
    return () => cancelAnimationFrame(raf);
  }, [section]);

  useEffect(() => {
    const element = canvas.current!;
    const ctx = element.getContext('2d')!;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sand = makeSand();
    const { x, y } = sand;
    const step = () => sand.step(DOSES[current.current]);
    let W = 0;
    let H = 0;
    let S = 0;
    let CX = 0;
    let CY = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = SAND;
      ctx.globalAlpha = 0.85;
      const x0 = CX - S / 2;
      const y0 = CY - S / 2;
      for (let i = 0, n = sand.n; i < n; i++) {
        ctx.fillRect(x0 + x[i] * S, y0 + y[i] * S, 1.25, 1.25);
      }
      ctx.globalAlpha = 1;
    };

    const size = () => {
      const ratio = window.devicePixelRatio || 1;
      const box = element.getBoundingClientRect();
      W = box.width;
      H = box.height;
      element.width = W * ratio;
      element.height = H * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const wide = window.matchMedia('(min-width: 901px)').matches;
      S = wide ? Math.min(H * 0.76, W * 0.5, 760) : W;
      CX = W / 2;
      CY = wide ? H / 2 + 6 : H / 2;
      // Room left beside the plate for the text columns, and the line under it.
      root.current!.style.setProperty(
        '--side',
        `${Math.floor((W - S) / 2 - 64)}px`
      );
      key.current!.style.top = wide ? `${Math.round(CY + S / 2 + 14)}px` : '';
      if (still) draw();
    };

    // With motion reduced the sand is shown already settled, and holds still.
    const settle = () => {
      for (let k = 0; k < 500; k++) step();
      draw();
    };
    resettle.current = still ? settle : () => {};

    size();
    if (still) settle();

    let raf = 0;
    let then = 0;
    let owed = 0;
    const frame = (now: number) => {
      // The sand keeps one pace whatever the screen's refresh rate.
      owed = Math.min(3, owed + (then ? (now - then) / (1000 / 60) : 1));
      then = now;
      while (owed >= 1) {
        step();
        owed--;
      }
      draw();
      raf = requestAnimationFrame(frame);
    };
    if (!still) raf = requestAnimationFrame(frame);

    // A hand through the sand.
    const touch = (event: PointerEvent) => {
      const box = element.getBoundingClientRect();
      const u = (event.clientX - box.left - CX) / S + 0.5;
      const v = (event.clientY - box.top - CY) / S + 0.5;
      for (let i = 0, n = sand.n; i < n; i++) {
        const dx = x[i] - u;
        const dy = y[i] - v;
        if (dx * dx + dy * dy < 0.004) {
          x[i] += dx * 0.5 + (Math.random() - 0.5) * 0.02;
          y[i] += dy * 0.5 + (Math.random() - 0.5) * 0.02;
        }
      }
      if (still) draw();
    };
    element.addEventListener('pointermove', touch);
    window.addEventListener('resize', size);
    return () => {
      cancelAnimationFrame(raf);
      element.removeEventListener('pointermove', touch);
      window.removeEventListener('resize', size);
    };
  }, []);

  const dose = DOSES[section];

  return (
    <div className="room" ref={root}>
      <header className="room-who">
        <h1>Artem Yavorsky</h1>
        <p>AI agents, developer tools, and the teams behind them</p>
      </header>

      <aside className="room-plaque">
        <div className="room-formula" ref={formula} aria-label={dose.formula} />
      </aside>

      <canvas ref={canvas} className="room-plate" aria-hidden="true" />
      <p className="room-key" ref={key}>
        <Link href="/sand">The sand is dopamine.</Link>
      </p>

      <nav className="room-nav" aria-label="Sections">
        {names.map((name, index) => (
          <a
            key={name}
            href={`#${name.toLowerCase()}`}
            aria-current={index === section ? 'true' : undefined}
          >
            {name}
          </a>
        ))}
      </nav>

      <section className="room-panel">
        <div hidden={section !== 0}>{about}</div>
        {rooms.map((room, index) => (
          <ul key={room.name} hidden={section !== index + 1}>
            {room.works.map((work) => {
              const body = (
                <>
                  <b>{work.title}</b>
                  {work.note && <span>{work.note}</span>}
                </>
              );
              return (
                <li key={work.href}>
                  {work.href.startsWith('http') ? (
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {body}
                    </a>
                  ) : (
                    <Link href={work.href}>{body}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        ))}
      </section>
    </div>
  );
}
