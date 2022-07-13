import React from 'react';

function Nav() {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <a className='nav-link' href="#">Home</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href="#add-entry">Add Entry</a>
      </li>
    </ul>
  );
}

export default Nav;
