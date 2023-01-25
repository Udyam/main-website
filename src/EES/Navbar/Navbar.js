import React from 'react';
import { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleButton from '../../Dashboard/GoogleButton';

const Navbar = () => {
  const navigate = useNavigate();
  const clientId = '868476725043-56q2l17h7bf2a1fpvkqp04t5br7mti4p.apps.googleusercontent.com';

  const [width, setWidth] = useState(window.innerWidth);
  const [eventLink, setEventLink] = useState(false);
  const [click, setclick] = useState(true);
  const [slideUdyam, setSlideUdyam] = useState(false);
  console.log('client_id: ', clientId);
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
  function nameOfEvents() {
    setSlideUdyam(!slideUdyam);
  }

  const logout = () => {
    window.sessionStorage.removeItem('registered_email');
    toast.success('Logout was successfull!', {
      theme: 'dark',
      position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1200
    });
    navigate('/');
  };

  return (
    <>
      {width < 800 && (
        <div className="window">
          <div className="header">
            <div className="burger-container" onClick={open}>
              <div id="burger">
                <div className="bar topBar"></div>
                <div className="bar btmBar"></div>
              </div>
            </div>

            <ul className="menu">
              <li className="menu-item">
                <a href="#" onClick={open}>
                  Home
                </a>
              </li>
              <li className="menu-item">
                <Link to="/udyam/name">
                  <a href="#">Registration</a>
                </Link>
              </li>
              <li className="menu-item" onClick={nameOfEvents}>
                <a href="#">Events</a>
              </li>
              {slideUdyam && (
                <div className="event-names">
                  <li>
                    <Link to="/udyam">
                      <a href="#">Udyam</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/udgam">
                      <a href="#">Udgam</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mashal">
                      <a href="#">Mashal</a>
                    </Link>
                  </li>
                </div>
              )}
              <li className="menu-item">
                <a href="#sponsors" onClick={open}>
                  Sponsors
                </a>
              </li>
              <li className="menu-item">
                <a href="#speakers" onClick={open}>
                  Speakers
                </a>
              </li>
              <li className="menu-item">
                <Link to="/gallery">
                  <a href="#">Gallery</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/team">
                  <a href="/team">Team</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {eventLink && (
        <div className="dropmenu">
          <Link to="/udyam">
            <a href="#">Udyam</a>
          </Link>
          <Link to="/udgam">
            <a href="#">Udgam</a>
          </Link>
          <Link to="/mashal">
            <a href="#">Mashal</a>
          </Link>
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
                <Link to="/gallery">
                  <a href="#">Gallery</a>
                </Link>
              </li>
              <li>
                <Link to="/team">
                  <a href="#">Team</a>
                </Link>
              </li>
            </ul>
            <GoogleButton
              initialHTML={<span>Register</span>}
              laterHTML={
                <GoogleLogout
                  clientId={clientId}
                  theme="dark"
                  render={(renderProps) => (
                    <div className="menu-text" style={{ display: 'flex' }} onClick={renderProps.onClick}>
                      <span>Logout</span>
                    </div>
                  )}
                  onLogoutSuccess={logout}
                />
              }
            />
            <button className="menu-bar" onClick={expand}>
              <i className={click ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
