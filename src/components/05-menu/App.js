import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './style.css';

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

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
            <Categories />
            <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
