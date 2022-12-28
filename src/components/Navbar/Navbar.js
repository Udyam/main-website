/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // const btn = document.querySelector('menu span i')
  const [click, setclick] = useState(false);
 
  function expand() {
    if (click) {
      document.querySelector('.nav-links').style.display = 'flex';
      document.querySelector('.menu-text').style.display = 'none';

    } else {
      document.querySelector('.nav-links').style.display = 'none';
      document.querySelector('.menu-text').style.display = 'flex';
    }
    setclick(!click);
  }

  return (
    <div>
      <div className="container">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Sponsors</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
          <div className="menu-text">
            <span>Menu</span>
          </div>
          <button className="menu" onClick={expand}>
            <i className={click ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
