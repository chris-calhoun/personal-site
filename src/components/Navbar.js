import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-header'>
          bio
        </Link>
        <Link to='/' className='navbar-header'>
          experience
        </Link>
        <Link to='/' className='navbar-header'>
          projects
        </Link>
        <Link to='/' className='navbar-header'>
          contact
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
