'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import cx from 'classnames';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  className?: string;
}

// This component can be rendered on the server
const NavBreadcrumb = ({ className }: BreadcrumbProps) => {
  const p = usePathname();
  // Create breadcrumb segments
  const segments = p
    .split('/')
    .filter(Boolean)
    .map((segment) => ({
      label:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: segment,
    }));

  return (
    <nav
      className={cx(
        'flex items-center space-x-2 py-4 text-foreground',
        className
      )}
    >
      <Link
        href="/"
        className={`transition-colors text-xl font-bold ${segments.length > 0 ? 'hover:underline' : ''}`}
      >
        Art Yavorsky
      </Link>

      {segments.map((segment, index) => (
        <React.Fragment key={segment.path}>
          <ChevronRight className="w-4 h-4" />
          <Link
            href={`/${segments
              .slice(0, index + 1)
              .map((s) => s.path)
              .join('/')}`}
            className="hover:text-gray-900 transition-colors"
          >
            {segment.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default NavBreadcrumb;
