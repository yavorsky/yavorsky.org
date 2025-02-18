import { getBlogPosts } from '@/app/posts/utils';

export const baseUrl = 'https://yavorsky.org';

export default async function sitemap() {
  const posts = await getBlogPosts();
  const blogs = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/posts'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
