import { GithubIcon, MailIcon } from 'lucide-react';
import XIcon from './icons/x';

export const SocialLinks = () => {
  return (
    <div className="font-sm mt-4 flex  text-neutral-600 flex-row space-x-4 space-y-0 dark:text-neutral-300">
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yavorsky"
        >
          <GithubIcon size={16} />
          <p className="ml-2 h-7 hidden md:inline-block">yavorsky</p>
        </a>
      </div>
      <span className="mr-4 text-foreground/30">|</span>
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/yavorsky_"
        >
          <XIcon size={14} />
          <p className="ml-2 h-7 hidden md:inline-block">yavorsky_</p>
        </a>
      </div>
      <span className="mr-4 text-foreground/30">|</span>
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:aqson@me.com"
        >
          <MailIcon size={14} />
          <p className="ml-2 h-7 hidden md:inline-block">aqson@me.com</p>
        </a>
      </div>
    </div>
  );
};
