import Head from '../components/base/Head';
import Posts from '../components/blog/Posts';

const bg = '/static/bg.jpg';

export default () => (
  <div className="App">
    <Head title="Yavorsky - Blog" />
    <Blog />
    
    <style jsx>{`
      .Posts {
        display: flex;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background: #FFF;
        background-size: cover;
      }
    `}</style>
  </div>
)