import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2 data-testid='header'>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour, index) => {
          return <Tour data-testid={`tour-item-${index}`} key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
