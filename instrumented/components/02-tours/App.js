import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Loading from './Loading';
import Tours from './Tours';
import './style.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // If the tour ID does not match, it's going to be filtered out and put in the 'newTours' array.
    // If the ID being passed in DOES match, then that is the tour that we are going to remove when the 'Not Interested' (in 'Tour.js') button is clicked
    // (i.e., it will NOT be put in the 'newTours' array).
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const url = 'https://course-api.com/react-tours-project';

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      // console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2 data-testid='error'>No Tours Left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Tours</title>
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
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};

export default App;
