import { ReactNode } from 'react';

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      className="underline underline-offset-2 decoration-muted-foreground/40 transition-colors duration-150 hover:text-amber-400 hover:decoration-amber-400/40"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};
