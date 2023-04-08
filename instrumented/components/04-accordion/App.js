import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import { Helmet } from 'react-helmet';
import './style.css';

const App = () => {
  const [questions] = useState(data);

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
        <div className='accordion-container'>
          <h3>Questions and Answers About Login</h3>
          <section className='info'>
            {questions.map((question) => {
              // Use the spread operator to pass in all of the options from the data
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
