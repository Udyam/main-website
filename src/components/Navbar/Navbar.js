import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // const btn = document.querySelector('menu span i')
  const [click, setclick] = useState(true);
  var navLinks = document.querySelector('.nav-links');
  const menuText = document.querySelector('.menu-text');

  function expand() {
    console.log('hi');
    setclick(!click);
    console.log(click);
    // navLinks.classList.add('show')
    if (click === true) {
      navLinks.style.display = 'flex';
      menuText.style.display = 'none';
    } else {
      navLinks.style.display = 'none';
      menuText.style.display = 'flex';
    }
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
