import React from 'react';
import Resume from '../assets/Chris_Calhoun_Resume3.pdf';

function Footer() {
  return (
    <footer className='footer'>
      <div className='item item1'>
        <a
          href='https://www.linkedin.com/in/chris-calhoun/'
          target='_blank'
          rel='noreferrer'>
          <i className='icon fab fa-linkedin fa-2x' aria-hidden='true'></i>
        </a>
      </div>
      <div className='item item2'>
        <a
          href='https://github.com/chris-calhoun'
          target='_blank'
          rel='noreferrer'>
          <i className='icon fab fa-github fa-2x' aria-hidden='true'></i>
        </a>
      </div>
      <div className='item item3'>
        <a href='mailto:ctcalhoun2@gmail.com'>
          <i className='icon fas fa-envelope fa-2x'></i>
        </a>
      </div>
      <div className='item item4'>
        <a href={Resume} target='_blank' rel='noreferrer'>
          <i className='icon fas fa-file fa-2x'></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
