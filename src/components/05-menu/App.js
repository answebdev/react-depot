import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './style.css';

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  // Function for filter buttons (see Categories.js)
  const filterItems = (category) => {
    // If filter is equal to 'all', set 'items' back to original array with all of the items:
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Menu</title>
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
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
            <Categories filterItems={filterItems} />
            <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
