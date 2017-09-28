import { avatarUrl, description } from '../../config';

const WrapperClass = 'Intro-Info';

const ContactLink = ({ href, children, logo }) =>
  <a href={href} target="_blank" className={`Link flaticon-${logo}`}>
    <span>{children}</span>

    <style jsx>{`
      .Link {
        text-decoration: none;
        color: black;
        margin: 0;
        padding: 0;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-family: BlinkMacSystemFont, monospace;
        font-size: 12px;
        font-weight: 200;
        width: 70px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        tap-highlight-color: rgba(0, 0, 0, 0);
      }

      .Link span {
        font-size: 14px;
        opacity: 0;
        font-weight: 300;
      }

      .Link:hover span {
        opacity: 1;
      }

      .Link:hover {
        color: #000;
      }

      .Link:before {
        margin-left: 0;
        font-size: 24px;
      }

      @media (max-width: 480px) {
        .Link {
          padding: 15px 0;
        }

        .Link span {
          margin-top: 5px;
          opacity: 1;
          font-size: 16px;
        }
      }
    `}
    </style>
  </a>;

const ContactLinks = () => (
  <div className="Intro-Info-Contact">
    <ContactLink className="ContactLink" href="https://github.com/yavorsky" logo="github-logo">
      <span>yavorsky</span>
    </ContactLink>
    <ContactLink className="ContactLink" href="mailto:info@yavorsky.org" logo="envelope">
      <span>info@yavorsky.org</span>
    </ContactLink>
    <ContactLink className="ContactLink" href="https://twitter.com/yavorsky_" logo="twitter-black-shape">
      <span>yavorsky_</span>
    </ContactLink>

    <style jsx>{`
      .Intro-Info-Contact {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      @media (max-width: 480px) {
        .Intro-Info-Contact {
          margin-top: 20px;
          flex-direction: column;
          align-items: center;
        }
      }

    `}</style>
  </div>
);

export default () => (
  <div className={WrapperClass}>
    <div className="Intro-Info-Avatar" />
    <h1>Artem Yavorsky</h1>
    <h4>{description}</h4>
    <ContactLinks />

    <style jsx>{`
      .${WrapperClass} {
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: BlinkMacSystemFont, monospace;
      }

      .${WrapperClass}-Avatar {
        background-image: url(${avatarUrl});
        background-position: -5px, 10px;
        background-size: 110%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }

      h1 {
        font-weight: 500;
      }

      h4 {
        font-family: BlinkMacSystemFont, monospace;
        margin-top: 0;
        margin-top: 0px;
        font-weight: 200;
      }
    `}</style>
  </div>
);
