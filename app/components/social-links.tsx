import { GithubIcon, MailIcon } from 'lucide-react';
import XIcon from './icons/x';

export const SocialLinks = () => {
  return (
    <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yavorsky"
        >
          <GithubIcon size={16} />
          <p className="ml-2 h-7">yavorsky</p>
        </a>
      </li>
      <span className="mr-4 text-foreground/30">|</span>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/yavorsky_"
        >
          <XIcon size={14} />
          <p className="ml-2 h-7">yavorsky_</p>
        </a>
      </li>
      <span className="mr-4 text-foreground/30">|</span>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:aqson@me.com"
        >
          <MailIcon size={14} />
          <p className="ml-2 h-7">aqson@me.com</p>
        </a>
      </li>
    </ul>
  );
};
