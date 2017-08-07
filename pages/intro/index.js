import React from 'react';
import Page from '../../layouts/Page';
import PolygonLines from '../../components/canvas/polygon/Lines';
import Info from './Info';
import Nav from './Nav';

const WrapperClass = 'Intro';

export default () =>
  <Page className={WrapperClass}>
    <PolygonLines className="Intro-Canvas" />
    <Info />
    <Nav />

    <style jsx>{`
      .Intro {
        padding: 20px;
        flex: 1 1 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Page>;
