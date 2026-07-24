import { formatDate } from '@/app/posts/utils';

type Paper = {
  title: string;
  href: string;
  publishedAt: string;
  venue: string;
};

export const papers: Paper[] = [
  {
    title:
      'The Harness Effect: How Orchestration Design Sets the Token Economics of Enterprise Agentic AI',
    href: 'https://arxiv.org/abs/2607.06906',
    publishedAt: '2026-07-08',
    venue: 'arXiv:2607.06906',
  },
];

export function Papers() {
  return (
    <div>
      {papers
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .map((paper) => (
          <a
            key={paper.href}
            className="group flex flex-col mb-3"
            target="_blank"
            rel="noopener noreferrer"
            href={paper.href}
          >
            <div className="w-full flex flex-col md:flex-row md:items-baseline md:gap-4">
              <p className="font-mono text-xs uppercase text-muted-foreground md:w-20 shrink-0 tabular-nums whitespace-nowrap">
                {formatDate(paper.publishedAt, false, {
                  year: 'numeric',
                  month: 'short',
                })}
              </p>
              <div>
                <p className="tracking-tight text-pretty transition-colors duration-150 group-hover:text-amber-400">
                  {paper.title}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground/70">
                  {paper.venue}
                </p>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}
