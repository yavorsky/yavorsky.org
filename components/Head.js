import Head from 'next/head';

const defaultTitle = 'Artem Yavorsky - Frontend, Backend Development';

export default ({ title = defaultTitle }) => (
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Oswald|Cabin+Condensed|Didact+Gothic|Fira+Sans+Condensed|Kanit|Mukta+Vaani|Nunito+Sans|Open+Sans" rel="stylesheet"/>
    <link href="/static/icons.css" rel="stylesheet"/>
    <title>{ title }</title>
    <meta name="description" content="Freelance Web Consultant and Developer. HTML, CSS and JavaScript. Available for hire."/>
    <meta name="keywords" content="HTML, CSS, JavaScript, HTML5, CSS3, JS, React, Node.js, Frontend Development, Web Development, Web Design, Development, Frontend"/>
    <meta name="author" content="Artem Yavorsky"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta property="og:title" content="Artem Yavorsky - Freelance Web Consultant and Developer"/>
    <meta property="og:description" content="Artem Yavorsky - Freelance Web Consultant and Developer. Available for hire."/>
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/1521229?v=3&s=460"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@yavorsky_"/>
    <meta name="twitter:creator" content="@yavorsky_"/>
    <meta name="twitter:url" content="http://yavorsky.org"/>
    <meta name="twitter:title" content="Artem Yavorsky - Freelance Web Consultant and Developer"/>
    <meta name="twitter:description" content="Artem Yavorsky - Freelance Web Consultant and Developer. Available for hire."/>
    <meta name="twitter:image" content="https://avatars2.githubusercontent.com/u/1521229?v=3&s=460" />
  </Head>
);