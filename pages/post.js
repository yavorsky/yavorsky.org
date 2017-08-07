import React from 'react';
// import dynamic from 'next/dynamic'
import Page from '../layouts/Page';
import Posts from '../components/blog/Posts';
import { elements } from '../posts';


export default (props) => {
  const { url } = props;
 
  const Post = elements[url.query.name];
  // const data = dynamic(`../posts/jsx/${query}.js`);
  return <Page className='Post'>
    <div><Post /></div>
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
}