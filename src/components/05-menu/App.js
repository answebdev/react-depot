import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

const App = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Menu</title>
          <style type='text/css'>
            {`
              :root {
                fixed-width: 620px;
              }
              
              body {
                background-color: hsl(210, 36%, 96%);
              }
            `}
          </style>
        </Helmet>
      </div>
      <div>Menu</div>
    </>
  );
};

export default App;
