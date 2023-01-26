/* eslint-disable prettier/prettier */
import React from 'react';
import './UdgamNav.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { BiDollarCircle } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
// import { IoIosArrowBack } from 'react-icons/io';
// import { BiQrScan } from 'react-icons/bi';
import ees from './ees.svg';
// import udgam from './udgam.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// import Profile from '../Profile/Profile';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const UdgamNav = (props) => {
  // const [slideEvent, setEvent] = useState('false');
  // const [slideLeader, setLeader] = useState('false');
  const [slideNav, setNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  // const [activeNav, setActiveNav] = useState('#');
  // const [udgamName, setudgamName] = useState(true);
  // const [udyevents,setudyevents]=useState('Digism');
  // let ind=0;

  // function life(){
  //   const location = useLocation();

  //   // The current location.
  //   console.log(location);
  //   if(location.pathname=='/udgam/about'){setActiveNav('#about');}

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
  // const udgamNav = document.getElementsByClassName('.udgam-nav');

  // function checkNav() {
  //   // props.eventTitleFunc=e;
  //   // eventTitleFunc(e);
  //   setudgamName(true);
  //   if (width > 800) {
  //     return;
  //   } else {
  //     if (slideLeader === false) {
  //       document.querySelector('.leader').style.display = 'none';
  //     } else {
  //       document.querySelector('.token').style.display = 'none';
  //     }
  //     document.querySelector('.udgam-nav').style.display = 'none';
  //   }
  //   // props.eventTitleFunc();
  // }
  function menuNav() {
    // setudgamName(false);
    // if (slideLeader === false) {
    //   document.querySelector('.leader').style.display = 'block';
    // } else {
    //   document.querySelector('.token').style.display = 'block';
    // }
    // document.querySelector('.token').style.display = 'block';
    // document.querySelector('.leader').style.display = 'block';

    setNav(true);
    document.querySelector('.udgam-nav').style.display = 'block';
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
  // function names() {
  //   helloNav();
  // }
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
    // if(width<=800){document.querySelector('.udgam-nav').style.display = 'none';}
    setNav(false);
  }

  return (
    <>
      {' '}
      <div className="background">
        <div className="bg"></div>
        <div className="bg_filter"></div>
      </div>
      {/* {(udgamName || true) && width < 800 && <Profile />} */}
      {(slideNav || width > 800) && (
        <div className="udgam-nav">
          {width < 800 && (
            <div className="close" onClick={helloNav}>
              <AiOutlineClose />
            </div>
          )}
          <div className="udgam-img">
            <Link to="/udgam" style={{ textDecoration: 'none' }}>
              <img className="udgam-logo" src="/assets/udgam_nav_img.svg" alt="hero" />
            </Link>
          </div>
          <div className="udgam-icon">
            {/* <div
              className="name hovered"
              // ind="#name"
              onClick={names}
              id={props.active === '#name' ? 'active' : ''}>
              <Link to="/udgam/name" className="game-changer" style={{ textDecoration: 'none' }}>
                <BiQrScan className="info" />
                <p>Name</p>
              </Link>
            </div> */}
            <div
              className="about hovered"
              // ind="#about"
              onClick={abouts}
              id={props.active === '#about' ? 'active' : ''}
            >
              <Link to="/udgam/about" className="game-changer" style={{ textDecoration: 'none' }}>
                {' '}
                <AiOutlineInfoCircle className="info" />
                <p>About Us</p>
              </Link>
              {/* <a href="/udgam/about" className="game-changer">
                <AiOutlineInfoCircle className="info" />
                <p>About Us</p>
              </a> */}
            </div>
            <div className="events hovered" id={props.active === '#event' ? 'active' : ''} onClick={events}>
              <Link to="/udgam/events" className="game-changer" style={{ textDecoration: 'none' }}>
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
              <Link to="/udgam/sponsors" className="game-changer" style={{ textDecoration: 'none' }}>
                <BiDollarCircle className="info" />
                <p>Sponsors</p>
              </Link>
            </div>
            <div className="leaderboard hovered" id={props.active === '#leaderboard' ? 'active' : ''}>
              <Link to="/udgam/leaderboard" className="game-changer" style={{ textDecoration: 'none' }}>
                <FaAward className="info" />
                <p>Leaderboard</p>
              </Link>
            </div>
          </div>
          {/* <div className="udgam-ees">
                    <img className='ees-img' src={ees} alt="hreo" />
                </div> */}
        </div>
      )}
      <div className="udgam-ees-mobile">
        <Link to="/">
          <img className="ees-img-mobile" src={ees} alt="hreo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={menuNav}>
        <TfiMenu />
      </div>
    </>
  );
};

export default UdgamNav;
