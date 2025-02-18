import { BlogPosts } from '@/app/components/posts';
import { SocialLinks } from './components/social-links';

export default function Page() {
  return (
    <section className="max-w-2xl">
      <h1 className=" mb-4 text-2xl font-semibold tracking-tighter">
        Art Yavorsky
      </h1>
      <h3 className="mb-4 text-foreground/70 text-lg">
        Software Engineer & Engineering Manager
      </h3>

      <p>
        I create developer tools that make the impossible feel routine and
        routine feel fun.
      </p>
      <p className="mt-4">
        When I&apos;m not leading engineering teams at companies like Wix
        (2018-2023) and Netflix (2023-2025), I&apos;m building the fastest and
        open-source web stack detection tool - unbuilt.app, or contributing to
        Babel.js
      </p>
      <div className="mt-8">
        <h3 className="mb-4 text-foreground/70 text-lg">Read</h3>
        <BlogPosts />
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-foreground/70 text-lg">Follow</h3>
        <SocialLinks />
      </div>
    </section>
  );
}
