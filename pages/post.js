import Head from '../components/base/Head';
import Post from '../components/blog/Post';

export default (props) => (
  <div className="App">
    <Head title={props.title}/>
    <Post id={props.id}/>
    
    <style jsx>{`
      .App {
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