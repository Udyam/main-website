/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setclick] = useState(true);
  const [eventLink, setEventLink] = useState(false);

  function expand() {
    if (click) {
      document.querySelector('.nav-links').style.display = 'flex';
      document.querySelector('.menu-text').style.display = 'none';
    } else {
      document.querySelector('.nav-links').style.display = 'none';
      document.querySelector('.menu-text').style.display = 'flex';
    }
    setclick(!click);
    setEventLink(false);

  }
  function showEvents() {
    setEventLink(!eventLink);
  }

  return (
    <div>
      {eventLink && (
        <div className="dropmenu">
          <Link to="/udyam">
            <a href="#">Udyam</a>
          </Link>
          <Link to="/udyam">
            <a href="#">Udgam</a>
          </Link>
          <Link to="/udyam">
            <a href="#">Mashal</a>
          </Link>

        </div>
      )}
      <div className="container">
        <nav>
          <ul className="nav-links" style={{ display: 'none' }}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li>
              <a href="#events" onClick={showEvents}>
                Events
                <BiChevronDown style={{ color: '#fff' }} />
              </a>
            </li>
            <li>
              <a href="#sponsors" onClick={expand}>
                Sponsors
              </a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
          <div className="menu-text" style={{ display: 'flex' }}>
            <span>Register</span>
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
