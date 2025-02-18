import { BlogPosts } from '@/app/components/posts';

export const metadata = {
  title: 'Blog',
  description: 'Personal blog.',
};

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
