import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-item'>
          bio
        </Link>
        <Link to='/' className='navbar-item'>
          experience
        </Link>
        <Link to='/' className='navbar-item'>
          projects
        </Link>
        <Link to='/' className='navbar-item'>
          contact
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
