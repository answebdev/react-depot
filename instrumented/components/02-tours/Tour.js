import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4 data-testid='tour-name'>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        {/* 'substring(0,200)' means display 200 characters of 'info' text (includes spaces): */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            data-testid='read-more-less'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          data-testid='delete-btn'
          className='delete-btn'
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
