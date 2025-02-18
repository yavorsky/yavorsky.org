import { GithubIcon, XIcon } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yavorsky"
        >
          <GithubIcon size={14} />
          <p className="ml-2 h-7">github.com/yavorsky</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/yavorsky_"
        >
          <XIcon size={14} />
          <p className="ml-2 h-7">x.com/yavorsky_</p>
        </a>
      </li>
    </ul>
  );
};
