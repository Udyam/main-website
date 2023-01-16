/* eslint-disable prettier/prettier */
import React from 'react';
import { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [eventLink, setEventLink] = useState(false);
  const [click, setclick] = useState(true);

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
  function showEvents() {
    setEventLink(!eventLink);
  }
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function open() {
    document.querySelector('.header').classList.toggle('menu-opened');
  }

  return (
    <>
      {width < 800 && (
        <div className="window">
          <div className="header">
            <div className="burger-container">
              <div id="burger" onClick={open}>
                <div className="bar topBar"></div>
                <div className="bar btmBar"></div>
              </div>
            </div>

            <ul className="menu">
              <li className="menu-item">
                <a href="#">Home</a>
              </li>
              <li className="menu-item">
                <Link to="/udyam/name">
                  <a href="#">Registration</a>
                </Link>
              </li>
              <li className="menu-item">
                <a href="#">Events</a>
              </li>
              <li className="menu-item">
                <a href="#">Sponsors</a>
              </li>
              <li className="menu-item">
                <a href="#">Speakers</a>
              </li>
              <li className="menu-item">
                <a href="#">Gallery</a>
              </li>
              <li className="menu-item">
                <a href="#">Team</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {width > 800 && (
        <div className="container">
          <nav>
            <ul className="nav-links" style={{ display: 'none' }}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link to="/udyam/name">
                  <a href="#">Registration</a>
                </Link>
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
                <a href="#speakers" onClick={expand}>
                  Speakers
                </a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
            <div className="menu-text" style={{display:'flex'}}>
              <span>Register</span>
            </div>
            <button className="menu-bar" onClick={expand} style={{ position: 'fixed' }}>
              <i className={click ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
