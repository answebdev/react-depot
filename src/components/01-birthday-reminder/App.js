import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import data from './data';
import List from './List';
import './style.css';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Birthday Reminder</title>
          <style type='text/css'>
            {`
              body {
                background-color: #f28ab2;
              }
            `}
          </style>
        </Helmet>
      </div>
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button className='button' onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
