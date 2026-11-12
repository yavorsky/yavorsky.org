'use client';

import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { Signal } from '@/app/components/signal';
import { sections, type Entry } from '@/app/works';

function Row({ entry }: { entry: Entry }) {
  const className =
    'group grid grid-cols-[2rem_1fr] md:grid-cols-[2rem_1fr_auto] gap-x-4 items-baseline py-3 border-t border-border outline-none';
  const body = (
    <>
      <span className="font-mono text-xs tabular-nums text-muted-foreground transition-colors duration-150 group-hover:text-amber-400 group-focus-visible:text-amber-400">
        {entry.no}
      </span>
      <span>
        <span className="block tracking-tight text-pretty transition-colors duration-150 group-hover:text-amber-400 group-focus-visible:text-amber-400">
          {entry.title}
        </span>
        {entry.note && (
          <span className="mt-1 block font-mono text-xs text-muted-foreground/70">
            {entry.note}
          </span>
        )}
      </span>
      <span className="col-start-2 md:col-start-3 mt-1 md:mt-0 font-mono text-xs uppercase text-muted-foreground tabular-nums whitespace-nowrap">
        {entry.meta}
      </span>
    </>
  );

  return entry.href.startsWith('http') ? (
    <a
      className={className}
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {body}
    </a>
  ) : (
    <Link className={className} href={entry.href}>
      {body}
    </Link>
  );
}

export function Field({
  entries,
  children,
}: {
  entries: Entry[];
  children: React.ReactNode;
}) {
  // The section being pointed at, in the message or in the index.
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>{children}</div>
        <Signal active={active} setActive={setActive} />
      </div>

      <div className="mt-20">
        {sections.map((section) => {
          const rows = entries.filter((entry) => entry.section === section);
          if (rows.length === 0) return null;
          return (
            <section
              key={section}
              id={section.toLowerCase()}
              className="grid md:grid-cols-[7rem_1fr] gap-x-4 mb-10 scroll-mt-8"
              onMouseEnter={() => setActive(section)}
              onMouseLeave={() => setActive(null)}
            >
              <h2
                className={cx(
                  'font-mono text-[11px] uppercase tracking-[0.14em] py-3 md:border-t md:border-border transition-colors duration-150',
                  active === section ? 'text-amber-400' : 'text-muted-foreground'
                )}
              >
                {section}
              </h2>
              <div>
                {rows.map((entry) => (
                  <Row key={entry.no} entry={entry} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
