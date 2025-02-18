import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import cx from 'classnames';
import { ReactNode } from 'react';
import NavBreadcrumb from './components/nav-breadcrumb';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cx('h-full', GeistSans.variable, GeistMono.variable)}
    >
      <body className="dark antialiased max-w-4xl lg:mx-auto h-full">
        <main className="min-w-0 flex flex-col px-2 md:px-0 items-center h-full">
          <div className="flex-0">
            <NavBreadcrumb className="mt-10" />
            {children}
          </div>
          <Footer className="flex-1 items-end justify-end flex" />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
