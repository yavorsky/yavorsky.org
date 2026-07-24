import { BlogPosts } from '@/app/components/posts';
import { Papers } from '@/app/components/papers';
import { SectionLabel } from '@/app/components/section-label';
import { SocialLinks } from './components/social-links';
import { ExternalLink } from './components/link';
import Link from 'next/link';

export default function Page() {
  return (
    <section className="max-w-2xl mt-16">
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        Art Yavorsky
      </h1>
      <p className="mt-3 text-lg text-muted-foreground text-pretty">
        Software Engineer & Engineering Manager
      </p>

      <p className="mt-10 text-pretty">
        I create developer tools that make the impossible feel routine and
        routine feel fun.
      </p>
      <p className="mt-4 text-pretty">
        When I&apos;m not leading engineering teams at companies like{' '}
        <ExternalLink href="https://wix.com">Wix</ExternalLink> (2018-2023) and{' '}
        <ExternalLink href="https://netflix.com">Netflix</ExternalLink>{' '}
        (2023-2025), I&apos;m working on{' '}
        <ExternalLink href="https://unbuilt.app">unbuilt.app</ExternalLink> -
        the fastest and open-source web stack detection tool, and building{' '}
        <ExternalLink href="https://simr.app">simr</ExternalLink> - a cleaner
        way to cook without the life stories. I also contribute to open-source
        projects like{' '}
        <ExternalLink href="https://babeljs.io">Babel</ExternalLink> and share
        my knowledge at tech conferences and meetups.
      </p>
      <p className="mt-4 text-pretty">
        Currently at{' '}
        <ExternalLink href="https://writer.com">Writer.com</ExternalLink>,
        I&apos;m helping to move forward an end-to-end AI platform that unites
        IT & business teams.
      </p>
      <p className="mt-4 text-pretty">
        Want to hire? Feel free to check out my{' '}
        <Link
          className="underline transition-colors duration-150 hover:text-amber-400"
          href="/cv"
        >
          cv
        </Link>{' '}
        and to reach me via any of the links below.
      </p>

      <div className="mt-14">
        <SectionLabel>Research</SectionLabel>
        <div className="mt-5">
          <Papers />
        </div>
      </div>
      <div className="mt-12">
        <SectionLabel>Read</SectionLabel>
        <div className="mt-5">
          <BlogPosts />
        </div>
      </div>
      <div className="mt-12">
        <SectionLabel>Connect</SectionLabel>
        <SocialLinks />
      </div>
    </section>
  );
}
