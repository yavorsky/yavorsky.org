import Link from 'next/link';
import { Plate } from '@/app/components/plate';
import { formatDate, getBlogPosts } from '@/app/posts/utils';
import { sections, works, type Work } from '@/app/works';

export default async function Page() {
  const posts = await getBlogPosts();
  const read: Work[] = posts
    .sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt))
    .map((post) => ({
      section: 'Read',
      title: post.metadata.title,
      note: formatDate(post.metadata.publishedAt, false, {
        year: 'numeric',
        month: 'short',
      }),
      href: `/posts/${post.slug}`,
    }));
  const all = [...works, ...read];
  const rooms = sections.map((name) => ({
    name,
    works: all.filter((work) => work.section === name),
  }));

  return (
    <Plate
      rooms={rooms}
      about={
        <>
          <p>
            I build developer tools that make the impossible feel routine and
            the routine feel fun.
          </p>
          <p>
            Led engineering teams at{' '}
            <a href="https://wix.com" target="_blank" rel="noopener noreferrer">
              Wix
            </a>{' '}
            and{' '}
            <a
              href="https://netflix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netflix
            </a>
            . Now at{' '}
            <a
              href="https://writer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Writer
            </a>
            .
          </p>
          <p>
            Open source on the <a href="#build">Babel</a> team. Made{' '}
            <a href="#build">unbuilt.app</a> and <a href="#build">simr</a>.{' '}
            <a href="#read">Speak at conferences</a>.
          </p>
          <p className="room-links">
            <Link href="/cv">CV</Link>
            <a
              href="https://github.com/yavorsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yvrsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/aqson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="mailto:aqson@me.com">Email</a>
          </p>
        </>
      }
    />
  );
}
