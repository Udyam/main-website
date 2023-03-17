import React from 'react';
import { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const scope = 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read';
const clientId = process.env.REACT_APP_CLIENT_ID;

const Navbar = () => {
  const navigate = useNavigate();
  const onGoogleLoginSuccess = (res) => {
    console.log('SUCCESS!!! Current User: ', res);
    window.sessionStorage.setItem('profileData', JSON.stringify(res.profileObj));
    window.sessionStorage.setItem('tokenId', res.tokenId);
    window.sessionStorage.setItem('imageUrl', res.profileObj.imageUrl);
    // console.log('res.profileObj: ', res);
    axios({
      url: 'https://udyam.pythonanywhere.com/auth/google-login/',
      method: 'post',
      headers: { Authorization: res.tokenId },
      data: {
        email: res.profileObj.email
      }
    })
      .then((res) => {
        console.log('res: ', res);
        if (res.status === 200) {
          window.sessionStorage.setItem('registered_email', res.data.email);
          window.sessionStorage.setItem('profileData', JSON.stringify(res.data));
          toast.success('Login was successfull!', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1200
          });
          console.log('stored Data', JSON.parse(window.sessionStorage.getItem('profileData')));
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warning('Your registeration is incomplete.', {
          theme: 'dark',
          position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000
        });
        navigate('/dashboard');
      });
  };

  const onGoogleLoginFailure = (res) => {
    console.log('FAILURE!!! res: ', res);
  };

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
    setTimeout(function () {
      document.getElementsByClassName('logout-btn')[0].classList.toggle('show-now');
    }, 500);
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

            <GoogleLogout
              clientId={clientId}
              theme="dark"
              render={(renderProps) => (
                <div className="logout-btn" onClick={renderProps.onClick}>
                  <IoMdLogOut></IoMdLogOut>
                </div>
              )}
              onLogoutSuccess={logout}
            />

            <ul className="menu">
              <li className="menu-item">
                <Link to="/" onClick={open}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                {window.sessionStorage.getItem('registered_email') == null ? (
                  <GoogleLogin
                    theme="dark"
                    accessType="online"
                    disabled={false}
                    client_id={clientId} // your Google app client ID
                    buttonText="Sign in with Google"
                    onSuccess={onGoogleLoginSuccess} // perform your user logic here
                    onFailure={onGoogleLoginFailure} // handle errors here
                    cookiePolicy={'single-host-origin'}
                    scope={scope}
                    render={(renderProps) => (
                      <Link to="#" onClick={renderProps.onClick}>
                        <a href="#">Registration</a>
                      </Link>
                    )}
                  />
                ) : (
                  <Link to="/dashboard">
                    <a href="#">Dashboard</a>
                  </Link>
                )}
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
                <Link to="/">Home</Link>
              </li>
              <li>
                {window.sessionStorage.getItem('registered_email') == null ? (
                  <GoogleLogin
                    theme="dark"
                    accessType="online"
                    disabled={false}
                    client_id={clientId} // your Google app client ID
                    buttonText="Sign in with Google"
                    onSuccess={onGoogleLoginSuccess} // perform your user logic here
                    onFailure={onGoogleLoginFailure} // handle errors here
                    cookiePolicy={'single-host-origin'}
                    scope={scope}
                    render={(renderProps) => (
                      <Link to="#" onClick={renderProps.onClick}>
                        <a href="#">Registration</a>
                      </Link>
                    )}
                  />
                ) : (
                  <Link to="/dashboard">
                    <a href="#">Dashboard</a>
                  </Link>
                )}
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
            {window.sessionStorage.getItem('registered_email') == null ? (
              <GoogleLogin
                theme="dark"
                accessType="online"
                disabled={false}
                client_id={clientId} // your Google app client ID
                buttonText="Sign in with Google"
                onSuccess={onGoogleLoginSuccess} // perform your user logic here
                onFailure={onGoogleLoginFailure} // handle errors here
                cookiePolicy={'single-host-origin'}
                scope={scope}
                render={(renderProps) => (
                  <div className="menu-text" style={{ display: 'flex' }} onClick={renderProps.onClick}>
                    <span>Register</span>
                  </div>
                )}
              />
            ) : (
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
            )}
            ;
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
