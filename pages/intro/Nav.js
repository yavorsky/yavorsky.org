import Link from 'next/link';
const WrapperClass = 'Intro-Nav';

// <Link className="Intro-Nav Menu-Link" href="posts">Blog</Link>
export default () =>
  <div className={WrapperClass}>

    <style jsx>{`
      .${WrapperClass} {
        position: absolute;
        bottom: 20px;
        z-index: 10;
        font-weight: 200;
      }
    `}</style>
  </div>;
