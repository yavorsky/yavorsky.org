import Head from '../components/base/Head';

export default ({ children, title }) => (
  <div className="Page">
    <Head title={title}/>
    {children}

    <style jsx>{`
      .Page {
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
