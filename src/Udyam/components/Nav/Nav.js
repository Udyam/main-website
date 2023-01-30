/* eslint-disable prettier/prettier */
import React from 'react';
import './Nav.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { BiDollarCircle } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { BiQrScan } from 'react-icons/bi';
import ees from '../Nav/ees.svg';
import udyam from '../Nav/udyam.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { TfiMenu } from 'react-icons/tfi';
// import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Profile from '../Profile/Profile';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const scope = 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read';
const clientId = process.env.REACT_APP_CLIENT_ID;

const Nav = (props) => {
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
  // const [slideEvent, setEvent] = useState('false');
  // const [slideLeader, setLeader] = useState('false');
  const [slideNav, setNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  // const [activeNav, setActiveNav] = useState('#');
  const [udyamName, setUdyamName] = useState(true);
  // const [udyevents,setudyevents]=useState('Digism');
  // let ind=0;

  // function life(){
  //   const location = useLocation();

  //   // The current location.
  //   console.log(location);
  //   if(location.pathname=='/udyam/about'){setActiveNav('#about');}

  // }
  // useEffect(() => {
  //   life();
  // }, []);
  //   useEffect(() => {
  //     life();
  //   }, []);

  // }
  // // life();

  // window.addEventListener("beforeunload", () => {
  //   life();
  //   console.log("API call before page reload");
  // });

  // window.addEventListener("unload", () => {
  //   life();
  //   console.log("API call after page reload");
  // });

  // const Token = document.getElementsByClassName('.token')
  // const UdyamNav = document.getElementsByClassName('.udyam-nav');

  // function checkNav() {
  //   // props.eventTitleFunc=e;
  //   // eventTitleFunc(e);
  //   setUdyamName(true);
  //   if (width > 800) {
  //     return;
  //   } else {
  //     if (slideLeader === false) {
  //       document.querySelector('.leader').style.display = 'none';
  //     } else {
  //       document.querySelector('.token').style.display = 'none';
  //     }
  //     document.querySelector('.udyam-nav').style.display = 'none';
  //   }
  //   // props.eventTitleFunc();
  // }
  function menuNav() {
    setUdyamName(false);
    // if (slideLeader === false) {
    //   document.querySelector('.leader').style.display = 'block';
    // } else {
    //   document.querySelector('.token').style.display = 'block';
    // }
    // document.querySelector('.token').style.display = 'block';
    // document.querySelector('.leader').style.display = 'block';

    setNav(true);
    document.querySelector('.udyam-nav').style.display = 'block';
    // setNav(!slideNav);
  }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // function slideEvents() {
  //   setEvent(!slideEvent);
  //   setLeader(true);

  //   // Events.style.backgroundColor = 'yellow'
  // }
  // function slideLeaderboard() {
  //   setLeader(!slideLeader);
  //   setEvent(true);

  // }
  function events() {
    helloNav();
  }
  function names() {
    helloNav();
  }
  function abouts() {
    helloNav();
  }
  function sponsors() {
    helloNav();
  }
  // function showNav() {
  //   setNav(!slideNav);
  //   setEvent(true);
  //   setLeader(true);
  // }
  // // function slidemobile() {
  //   // setEvent(true);
  //   // setLeader(true);
  // }
  function helloNav() {
    // if(width<=800){document.querySelector('.udyam-nav').style.display = 'none';}
    setNav(false);
    setUdyamName(true);
  }

  return (
    <>
      {' '}
      <div className="background">
        <div className="bg"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
      {(udyamName || true) && width < 800 && <Profile />}
      {(slideNav || width > 800) && (
        <div className="udyam-nav">
          <div className="close" onClick={helloNav}>
            <IoIosArrowBack />
          </div>

          <div className="udyam-img">
            <Link to="/udyam" style={{ textDecoration: 'none' }}>
              <img className="udyam-logo" src={udyam} alt="hero" />
            </Link>
          </div>
          <div className="udyam-icon">
            <div
              className="name hovered"
              // ind="#name"
              onClick={names}
              id={props.active === '#name' ? 'active' : ''}
            >
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
                    <Link to="#" className="game-changer" style={{ textDecoration: 'none' }} onClick={renderProps.onClick}>
                      <BiQrScan className="info" />
                      <p>Name</p>
                    </Link>
                  )}
                />
              ) : (
                <Link to="/dashboard" className="game-changer" style={{ textDecoration: 'none' }}>
                  <BiQrScan className="info" />
                  <p>Name</p>
                </Link>
              )}
              ;
            </div>
            <div
              className="about hovered"
              // ind="#about"
              onClick={abouts}
              id={props.active === '#about' ? 'active' : ''}
            >
              <Link to="/udyam/about" className="game-changer" style={{ textDecoration: 'none' }}>
                {' '}
                <AiOutlineInfoCircle className="info" />
                <p>About Us</p>
              </Link>
              {/* <a href="/udyam/about" className="game-changer">
                <AiOutlineInfoCircle className="info" />
                <p>About Us</p>
              </a> */}
            </div>
            <div className="events hovered" id={props.active === '#event' ? 'active' : ''} onClick={events}>
              <Link to="/udyam/events" className="game-changer" style={{ textDecoration: 'none' }}>
                <BiNews className="info" />
                <p>Events</p>
              </Link>
            </div>
            <div
              className="sposors hovered"
              // ind="#sponsors"
              onClick={sponsors}
              id={props.active === '#sponsors' ? 'active' : ''}
            >
              <Link to="/udyam/sponsors" className="game-changer" style={{ textDecoration: 'none' }}>
                <BiDollarCircle className="info" />
                <p>Sponsors</p>
              </Link>
            </div>
            <div className="leaderboard hovered" id={props.active === '#leaderboard' ? 'active' : ''}>
              <Link to="/udyam/leaderboard" className="game-changer" style={{ textDecoration: 'none' }}>
                <FaAward className="info" />
                <p>Leaderboard</p>
              </Link>
            </div>
          </div>
          <div className="hovered ees-div-img">
            <Link to="/" className="game-changer">
              <img className="eesimg" src={ees} alt="hreo" />
            </Link>
          </div>
          {/* <div className="udyam-ees">
                    <img className='ees-img' src={ees} alt="hreo" />
                </div> */}
        </div>
      )}
      <div className="menu-icon" onClick={menuNav}>
        <TfiMenu />
      </div>
      {/* 
              
              
              
              
              
              
              
              
              
              
              
      
              
              
              
              
              
               */}
      {false && (
        <div className="token">
          <div className="back">
            <IoIosArrowBack />
          </div>
          <div className="token-event">
            <div className="digism event-name active">
              <a href="#"> Digisim</a>
            </div>
            <div className="ichip event-name">
              <a href="#">I-Chip</a>
            </div>
            <div className="devbits event-name">
              <a href="#">DevBits</a>
            </div>
            <div className="commnet event-name">
              <a href="#">CommNet</a>
            </div>
            <div className="xiota event-name">
              <a href="#">X-IoT-A</a>
            </div>
            <div className="cassandra event-name">
              <a href="#">Cassandra</a>
            </div>
            <div className="mosaic event-name">
              <a href="#">Mosaic</a>
            </div>
            <div className="funckit event-name">
              <a href="#">Funckit</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
