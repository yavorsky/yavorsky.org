import { BlogPosts } from '@/app/components/posts';
import { SocialLinks } from './components/social-links';
import { ExternalLink } from './components/link';
import Link from 'next/link';

export default function Page() {
  return (
    <section className="max-w-2xl">
      <h3 className="mt-4 text-foreground/70 text-lg">
        Software Engineer & Engineering Manager
      </h3>

      <p className="mt-4">
        I create developer tools that make the impossible feel routine and
        routine feel fun.
      </p>
      <p className="mt-2">
        When I&apos;m not leading engineering teams at companies like{' '}
        <ExternalLink href="https://wix.com">Wix</ExternalLink> (2018-2023) and{' '}
        <ExternalLink href="https://netflix.com">Netflix</ExternalLink>{' '}
        (2023-2025), I&apos;m working on{' '}
        <ExternalLink href="https://unbuilt.app">unbuilt.app</ExternalLink> -
        the fastest and open-source web stack detection tool, contributing to{' '}
        <ExternalLink href="https://babeljs.io">Babel.js</ExternalLink> and
        sharing my knowledge at tech conferences and meetups.
      </p>
      <p className="mt-4">
        Want to hire? Feel free to check out my{' '}
        <Link className="underline" href="/cv">
          cv
        </Link>{' '}
        and to reach me via any of the links below.
      </p>
      <div className="mt-8">
        <h3 className="mb-4 text-foreground/70 text-lg">Read</h3>
        <BlogPosts />
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-foreground/70 text-lg">Connect</h3>
        <SocialLinks />
      </div>
    </section>
  );
}
