import React from 'react';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Birthday Reminder</title>
        </Helmet>
      </div>
      <div>
        <h1>Birthday Reminder</h1>
      </div>
    </>
  );
};

export default App;
