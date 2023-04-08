import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>React Depot</title>
        </Helmet>
      </div>
      <div className='app'>
        <h1 data-testid='title' className='title'>
          Projects
        </h1>
        <ol>
          <li>
            <Link className='main-link' to='/birthday-reminder'>
              Birthday Reminder
            </Link>
          </li>
          <li>
            <Link className='main-link' to='/tours'>
              Tours
            </Link>
          </li>
          <li>
            <Link className='main-link' to='/reviews'>
              Reviews
            </Link>
          </li>
          <li>
            <Link className='main-link' to='/accordion'>
              Accordion
            </Link>
          </li>
          <li>
            <Link className='main-link' to='/menu'>
              Menu
            </Link>
          </li>
          <li>
            <Link className='main-link' to='/tabs'>
              Tabs
            </Link>
          </li>
          <li>
            <Link className='main-link' to='/todo'>
              Todo App
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Home;
