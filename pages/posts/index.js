import React from 'react';
import Page from '../../layouts/Page';
import Posts from '../../components/blog/Posts';


export default () =>
  <Page className='Posts'>
    <Posts />
    <style jsx>{`
      .Posts {
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
