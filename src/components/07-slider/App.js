import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import './style.css';

const App = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Slider</title>
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
        <h1>Slider</h1>
      </div>
    </>
  );
};

export default App;
