import React from 'react';
import { ExportPdfButton } from '../components/export-pdf-button';

const CV = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header with Download Button */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-light mb-4">Artem Yavorskyi</h1>
            <h2 className="text-xl text-zinc-400">Senior Software Engineer</h2>
          </div>
          <ExportPdfButton />
        </div>

        {/* Contact */}
        <section className="mb-12 text-zinc-400">
          <div className="flex gap-8">
            <a href="mailto:aqson@me.com" className="hover:text-white transition-colors">
              aqson@me.com
            </a>
            <a href="https://linkedin.com/in/yvrsky" className="hover:text-white transition-colors">
              linkedin.com/in/yvrsky
            </a>
            <span>+1 (415) 914-1271</span>
            <span>+48 786 656 267</span>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-16">
          <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-4">Professional Summary</h3>
          <p className="text-zinc-300 leading-relaxed">
            Accomplished Senior Software Engineer with extensive experience in building high-performance web applications,
            developer tooling, and platform solutions. Proven track record of leading distributed teams, improving developer
            experience, and driving technical innovations at scale. Active open source contributor and Babel team member.
          </p>
        </section>

        {/* Technical Expertise */}
        <section className="mb-16">
          <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-4">Technical Expertise</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-zinc-400 mb-2">Frontend Frameworks & Libraries</h4>
              <p className="text-zinc-300">React • React Native • Svelte • Vue • Next.js • Tailwind CSS • shadcn/ui • Material-UI • Chakra UI</p>
            </div>
            <div>
              <h4 className="text-zinc-400 mb-2">Build & Development Tools</h4>
              <p className="text-zinc-300">Webpack • Turbopack • Vite • Rollup • esbuild • Babel • TypeScript • SWC • Brunch</p>
            </div>
            <div>
              <h4 className="text-zinc-400 mb-2">Backend & Databases</h4>
              <p className="text-zinc-300">Node.js • Bun • PostgreSQL • MySQL • MongoDB • Redis</p>
            </div>
            <div>
              <h4 className="text-zinc-400 mb-2">Infrastructure & Monitoring</h4>
              <p className="text-zinc-300">AWS • DigitalOcean • CircleCI • Jenkins • GitHub Actions • Sentry • Datadog • Firebase • New Relic</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Professional Experience</h3>
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-medium">Developer Experience Lead</h4>
                <span className="text-zinc-400">Wix.com</span>
              </div>
              <ul className="text-zinc-300 space-y-2">
                <li>• Built and led distributed team of 15 engineers across Kyiv and Tel Aviv</li>
                <li>• Spearheaded Wix CLI development, enabling efficient website and application development with 2,400 active users</li>
                <li>• Led Wix Blocks CLI tool development, facilitating component-driven development approach with 440 internal users</li>
                <li>• Implemented bundle optimization reducing size by 20% for 87% of Wix users</li>
                <li>• Established developer support system with 6-minute average resolution time</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-medium">Software Engineer</h4>
                <span className="text-zinc-400">Netflix</span>
              </div>
              <ul className="text-zinc-300 space-y-2">
                <li>• Delivered "Delivery List" project as Informed Captain, creating reusable component system</li>
                <li>• Architected shared platform for Games and Movies productions, achieving 60% code reuse</li>
                <li>• Reduced initial loading time by 30% through SSR optimization and component improvements</li>
                <li>• Initiated UniTestkits approach, reducing test boilerplate by 20% LOC per suite</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-medium">Lead Software Engineer</h4>
                <span className="text-zinc-400">Float.com</span>
              </div>
              <ul className="text-zinc-300 space-y-2">
                <li>• Led complete rewrite of Float Schedule to React with custom virtualization</li>
                <li>• Architected and developed React Native application with high code reuse between web and mobile</li>
                <li>• Designed monorepo architecture using yarn workspaces</li>
                <li>• Improved developer experience through HMR configuration and build caching</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open Source & Projects */}
        <section className="mb-16">
          <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Open Source & Projects</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-medium mb-2">unbuilt.app (Creator & Maintainer)</h4>
              <ul className="text-zinc-300 space-y-2">
                <li>• Developed web application analysis tool detecting frameworks, bundlers, and libraries</li>
                <li>• Built with Next.js (App Router), Server Actions, Playwright</li>
                <li>• Implemented custom queue manager on DigitalOcean for efficient resource utilization</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Babel Team Member</h4>
              <ul className="text-zinc-300 space-y-2">
                <li>• Led development of browserslist format targets integration in babel-preset-env</li>
                <li>• Implemented automatic polyfill injection based on target environment requirements</li>
                <li>• Improved build optimization through intelligent polyfill selection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publications & Speaking */}
        <section>
          <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Publications & Speaking</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Conference Talks</h4>
              <ul className="text-zinc-300 space-y-2">
                <li>• "AI for Developers: Assistant or Potential Threat?"</li>
                <li>• "99 Ways to Take Away Your Polyfills"</li>
                <li>• "How We Created Browser Inside Browser"</li>
                <li>• "Compile Like It's 2017"</li>
                <li>• "@babel/core 7"</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;