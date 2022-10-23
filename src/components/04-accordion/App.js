import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

const App = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Accordion</title>
          <style type='text/css'>
            {`
              body {
                background-color: #4b145b;
              }
            `}
          </style>
        </Helmet>
      </div>
      <main>
        <div className='accordion-container'>Accordion</div>
      </main>
    </>
  );
};

export default App;
