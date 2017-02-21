import React from 'react';
import PolygonLines from '../canvas/polygon/Lines';
// Oswald, Cabin Condensed, Helvetica Neue, Mukta Vaani
// <link href="https://fonts.googleapis.com/css?family=Oswald|Cabin+Condensed|Didact+Gothic|Fira+Sans+Condensed|Kanit|Mukta+Vaani|Nunito+Sans|Open+Sans" rel="stylesheet">
export default () =>
  <div className="Intro">
    <PolygonLines className="Intro-Canvas" />
    <div className="Intro-Info">
      <div className="Intro-Info-Avatar" />
      <h1>Artem Yavorsky</h1>
      <h4>Web Developer</h4>
      <div className="Intro-Info-Contact">
        <a href="https://github.com/yavorsky" target="_blank" className="flaticon-github-logo">yavorsky</a>
        <a href="mailto:info@yavorsky.org" className="flaticon-envelope">info@yavorsky.org</a>
        <a href="https://twitter.com/yavorsky_" target="_blank" className="flaticon-twitter-black-shape">yavorsky_</a>
      </div>
    </div>

    <style jsx>{`
      .Intro {
        padding: 20px;
        flex: 1 1 auto;
        // background-color: rgba(204, 204, 204, 0.2);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .Intro .Intro-Info {
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: BlinkMacSystemFont;
      }

      .Intro .Intro-Info .Intro-Info-Avatar {
        background-image: url('static/img5.png');
        background-position: -5px, 10px;
        background-size: 110%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }

      .Intro .Intro-Info h1 {
        font-weight: 500;
      }

      .Intro .Intro-Info h4 {
        font-family: BlinkMacSystemFont;
        margin-top: 0;
        margin-top: 0px;
        font-weight: 200;
      }

      .Intro-Info-Contact {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      .Intro-Info-Contact a {
        text-decoration: none;
        color: black;
        margin: 0;
        padding: 0;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: BlinkMacSystemFont;
        font-size: 9px;
        font-weight: 200;
        width: 70px;
      }

      .Intro-Info-Contact a:hover {
        color: #000;
      }

      .Intro-Info-Contact a:before {
        margin-left: 0;
      }
    `}</style>
  </div>