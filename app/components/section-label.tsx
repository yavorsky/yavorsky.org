import { ReactNode } from 'react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </h2>
  );
}
