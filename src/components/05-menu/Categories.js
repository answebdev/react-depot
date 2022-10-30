import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className='menu-btn-container'>
      <button className='menu-filter-btn' onClick={() => filterItems('all')}>
        all
      </button>
      <button
        className='menu-filter-btn'
        onClick={() => filterItems('breakfast')}
      >
        breakfast
      </button>
    </div>
  );
};

export default Categories;
