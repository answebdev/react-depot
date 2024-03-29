import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <AppBar
        sx={{
          backgroundColor: '#282C34',
        }}
        position='static'
      >
        <Toolbar>
          <span
            style={{
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              fontSize: '22px',
            }}
          >
            <Link data-testid='app-name' className='nav-link' to='/'>
              React Depot
            </Link>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
