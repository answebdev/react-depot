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
        </Helmet>
      </div>
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </>
  );
};

export default App;
