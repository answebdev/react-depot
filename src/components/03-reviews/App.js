import React from 'react';
import { Helmet } from 'react-helmet';
import Review from './Review';
import './style.css';

const App = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Reviews</title>
          <style type='text/css'>
            {`
              body {
                background-color: hsl(210, 36%, 96%);
              }
            `}
          </style>
        </Helmet>
      </div>
      <main>
        <section className='reviews-container'>
          <div className='title'>
            <h2>Our Reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
};

export default App;
