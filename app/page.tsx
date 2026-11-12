import Link from 'next/link';
import { Field } from '@/app/components/field';
import { SectionLabel } from '@/app/components/section-label';
import { SocialLinks } from './components/social-links';
import { ExternalLink } from './components/link';
import { formatDate, getBlogPosts } from '@/app/posts/utils';
import { catalogue, works, type Work } from '@/app/works';

export default async function Page() {
  const posts = await getBlogPosts();
  const read: Work[] = posts
    .sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt))
    .map((post) => ({
      section: 'Read',
      title: post.metadata.title,
      meta: formatDate(post.metadata.publishedAt, false, {
        year: 'numeric',
        month: 'short',
      }),
      href: `/posts/${post.slug}`,
    }));
  const entries = catalogue([...works, ...read]);

  return (
    <div className="mt-16 w-[min(56rem,calc(100vw-2rem))]">
      <Field entries={entries}>
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
          Led engineering teams at{' '}
          <ExternalLink href="https://wix.com">Wix</ExternalLink> (2018-2023)
          and <ExternalLink href="https://netflix.com">Netflix</ExternalLink>{' '}
          (2023-2025). Now at{' '}
          <ExternalLink href="https://writer.com">Writer.com</ExternalLink>,
          working on an end-to-end AI platform for IT and business teams.
        </p>
        <p className="mt-4 text-pretty">
          The{' '}
          <Link
            className="underline underline-offset-2 decoration-muted-foreground/40 transition-colors duration-150 hover:text-amber-400"
            href="/cv"
          >
            cv
          </Link>{' '}
          has the rest.
        </p>
      </Field>

      <div id="connect" className="grid md:grid-cols-[7rem_1fr] gap-x-4 scroll-mt-8">
        <div className="py-3 md:border-t md:border-border">
          <SectionLabel>Connect</SectionLabel>
        </div>
        <div className="border-t border-border">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
