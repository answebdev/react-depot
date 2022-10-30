import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './style.css';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Tabs</title>
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
      <div>
        <h1>Tabs</h1>
      </div>
    </>
  );
};

export default App;
