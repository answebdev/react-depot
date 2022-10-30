import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './style.css';

// Map through all the items in the data (data.js) and get the 'category' for each - for filter buttons (see Categories.js).
// Filter out unique 'category' from the data (data.js), i.e., get only the unique 'catgory' from the data list.

// Problem: We have repeating values, e.g., we have have more than one entry with the catagory of lunch, and this will give us multiple 'lunch' buttons, which we do not want.
// We only want one filter button for 'lunch', for example.
// So, if we have repeating values, then we only want to get the first one.
// Solution: This is where the 'Set' data structure comes into play: 'new Set' - what's cool about this is that it will only get the unique values, without any repeating values.

// Also, this will be an object, and we want to have this as an array, so we set 'allCatgories' to an array, with the first item being 'all'
// (we need to set 'all' here, since we want an all button, and this is because the data set from data.js does not have a category of 'all',
// and since we also want an 'all' button, we need to add it here to set it as the first item of the array).
// And then, we use the spread operator to spread out our Set data structure.
// This will now give us a new array ('allCategories') with all of the unique category values WITHOUT repeating values, as well as 'all' for our 'all' button.
// Finally, we can then pass in 'allCategories' as our state value up above.
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

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
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
