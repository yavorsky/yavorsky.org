import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
} from 'lucide-react';
import XIcon from './icons/x';
import BlueSkyIcon from './icons/bluesky';

export const SocialLinks = () => {
  return (
    <div className="flex-wrap mt-5 flex justify-between items-center text-muted-foreground flex-row gap-x-4 gap-y-3">
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-colors duration-150 hover:text-amber-400"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yavorsky"
        >
          <GithubIcon size={16} />
          <p className="ml-1.5 font-mono text-xs hidden md:inline-block">
            yavorsky
          </p>
        </a>
      </div>
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-colors duration-150 hover:text-amber-400"
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/yavorsky_"
        >
          <XIcon size={14} />
          <p className="ml-1.5 font-mono text-xs hidden md:inline-block">
            yavorsky_
          </p>
        </a>
      </div>
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-colors duration-150 hover:text-amber-400"
          rel="noopener noreferrer"
          target="_blank"
          href="https://yavorsky.bsky.social/"
        >
          <BlueSkyIcon size={14} />
          <p className="ml-1.5 font-mono text-xs hidden md:inline-block">
            yavorsky
          </p>
        </a>
      </div>
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-colors duration-150 hover:text-amber-400"
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/yvrsky"
        >
          <LinkedinIcon size={14} />
          <p className="ml-1.5 font-mono text-xs hidden md:inline-block">
            yvrsky
          </p>
        </a>
      </div>
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-colors duration-150 hover:text-amber-400"
          rel="noopener noreferrer"
          target="_blank"
          href="https://instagram.com/aqson"
        >
          <InstagramIcon size={14} />
          <p className="ml-1.5 font-mono text-xs hidden md:inline-block">
            aqson
          </p>
        </a>
      </div>
      <div className="md:px-0 px-4">
        <a
          className="flex items-center transition-colors duration-150 hover:text-amber-400"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:aqson@me.com"
        >
          <MailIcon size={14} />
          <p className="ml-1.5 font-mono text-xs hidden md:inline-block">
            aqson@me.com
          </p>
        </a>
      </div>
    </div>
  );
};
