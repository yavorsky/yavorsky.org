import { BlogPosts } from '@/app/components/posts';

export const metadata = {
  title: 'Posts',
  description: 'All posts.',
};

export default function Page() {
  return (
    <section className="max-w-2xl">
      <BlogPosts />
    </section>
  );
}
