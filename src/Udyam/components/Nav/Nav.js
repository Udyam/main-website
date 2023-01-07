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
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Profile from '../Profile/Profile';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const Nav = (props) => {
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
            <AiOutlineClose />
          </div>
          <div className="udyam-img">
            <Link to="/udyam">
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
              <Link to="/udyam" className="game-changer">
                <BiQrScan className="info" />
                <p>Name</p>
              </Link>
            </div>
            <div
              className="about hovered"
              // ind="#about"
              onClick={abouts}
              id={props.active === '#about' ? 'active' : ''}
            >
              <Link to="/udyam/about" className="game-changer">
                {' '}
                <AiOutlineInfoCircle className="info" />
                <p>About Us</p>
              </Link>
              {/* <a href="/udyam/about" className="game-changer">
                <AiOutlineInfoCircle className="info" />
                <p>About Us</p>
              </a> */}
            </div>
            <div className="events hovered" id={props.active === '#event' ? 'active' : ''}>
              <Link to="/udyam/events" className="game-changer">
                <BiNews className="info" />
                <p>Events</p>
              </Link>
            </div>
            <div
              className="sponsors hovered"
              // ind="#sponsors"
              onClick={sponsors}
              id={props.active == '#sponsors' ? 'active' : ''}
            >
              <Link to="/udyam/sponsors" className="game-changer">
                <BiDollarCircle className="info" />
                <p>Sponsors</p>
              </Link>
            </div>
            <div className="leaderboard hovered" id={props.active === '#leaderboard' ? 'active' : ''}>
              <Link to="/udyam/leaderboard" className="game-changer">
                <FaAward className="info" />
                <p>Leaderboard</p>
              </Link>
            </div>
          </div>
          {/* <div className="udyam-ees">
                    <img className='ees-img' src={ees} alt="hreo" />
                </div> */}
        </div>
      )}
      <div className="udyam-ees-mobile">
        <a href="https://eesdevelopment.netlify.app/">
          <img className="ees-img-mobile" src={ees} alt="hreo" />
        </a>
      </div>
      <div className="menu-icon" onClick={menuNav}>
        <TfiMenu />
      </div>
      {/* 
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              this div is not used
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
               */}
      {false && (
        <div className="token">
          <div className="back">
            <IoIosArrowBack />
          </div>
          <div className="token-event">
            <div className="digism event-name active">
              <a href="#"> Digism</a>
            </div>
            <div className="ichip event-name">
              <a href="#">I-chip</a>
            </div>
            <div className="devbits event-name">
              <a href="#">Devbits</a>
            </div>
            <div className="commnet event-name">
              <a href="#">Commnet</a>
            </div>
            <div className="xiota event-name">
              <a href="#">X-iota</a>
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
