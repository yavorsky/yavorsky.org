import Link from 'next/link';
import { formatDate, getBlogPosts } from '@/app/posts/utils';

export async function BlogPosts() {
  const allBlogs = await getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col mb-3"
            href={`/posts/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:items-baseline md:gap-4">
              <p className="font-mono text-xs uppercase text-muted-foreground md:w-20 shrink-0 tabular-nums whitespace-nowrap">
                {formatDate(post.metadata.publishedAt, false, {
                  year: 'numeric',
                  month: 'short',
                })}
              </p>
              <p className="tracking-tight text-pretty transition-colors duration-150 group-hover:text-amber-400">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
