import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='menu-btn-container'>
      <div className='menu-btn-container'>
        {/* Iterate over the catagories, and for each category, display the button: */}
        {categories.map((category, index) => {
          return (
            <button
              type='button'
              className='menu-filter-btn'
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
