import Intro from '../components/intro/Intro';

const bg = '/static/bg.jpg';

export default () => (
  <div className="App">
    <Intro />
    <div />
    <div />
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
      .App:after {
        content: '';
        position: fixed;
        z-index: -1;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
      }
    `}</style>
  </div>
)