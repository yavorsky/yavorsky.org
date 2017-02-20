import React from 'react';
import PolygonLines from '../canvas/polygon/Lines';

export default () =>
  <div className="Intro">
    <PolygonLines className="Intro-Canvas" />
    <div className="Intro-Info">
      <div className="Intro-Avatar" />
      <h1>Artem Yavorsky</h1>
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
        margin-top: 50px;
      }

      .Intro .Intro-Avatar {
        background-image: url('static/img5.png');
        background-position: -5px, 10px;
        background-size: 110%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    `}</style>
  </div>