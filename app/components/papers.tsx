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
            className="flex flex-col space-y-1 mb-4 group"
            target="_blank"
            rel="noopener noreferrer"
            href={paper.href}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 md:w-20 shrink-0 tabular-nums whitespace-nowrap">
                {formatDate(paper.publishedAt, false, {
                  year: 'numeric',
                  month: 'short',
                })}
              </p>
              <div>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                  {paper.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {paper.venue}
                </p>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}
