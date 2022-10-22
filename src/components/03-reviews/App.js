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
        </Helmet>
      </div>
      <main>
        <section className='container'>
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
