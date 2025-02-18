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
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 underline"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};
