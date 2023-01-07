import './events.css';
import bg from './bg2.png';
import Nav from '../Nav/Nav';
// import { useState } from 'react';
import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
// import LeaderBoard from '../LeaderBoard/LeaderBoard';

function Events() {
  const [eventTitle, setEventTitle] = useState('DIGISIM');
  const eventName = (event) => {
    var element = event.target;
    setEventTitle(element.innerText);
    // document.querySelector('.active').classList.remove('active');
    // element.classList.add('active');
    console.log(element);
  };

  // const [slideNav, setNav] = useState('false');
  const [width, setWidth] = useState(window.innerWidth);
  // const [activeNav, setActiveNav] = useState('#');
  // const [udyamName, setUdyamName] = useState(true);
  // const [udyevents,setudyevents]=useState('Digism');
  // let ind=0;

  // const Token = document.getElementsByClassName('.token')
  // const UdyamNav = document.getElementsByClassName('.udyam-nav');

  function checkNav() {
    // props.eventTitleFunc=e;
    // eventTitleFunc(e);
    // setUdyamName(true);
    if (width > 800) {
      return;
    } else {
      document.querySelector('.leader').style.display = 'none';
      if (document.querySelector('.udyam-nav') != null) {
        document.querySelector('.udyam-nav').style.display = 'none';
      }
    }
    // props.eventTitleFunc();
  }
  // function menuNav() {
  //   setNav(false);
  //   setUdyamName(false);
  //   if (slideLeader === false) {
  //     document.querySelector('.leader').style.display = 'block';
  //   } else {
  //     document.querySelector('.token').style.display = 'block';
  //   }
  //   // document.querySelector('.token').style.display = 'block';
  //   // document.querySelector('.leader').style.display = 'block';

  //   document.querySelector('.udyam-nav').style.display = 'block';
  //   // setNav(!slideNav);
  // }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  // function slideIn(e) {
  //   setEvent(true);
  //   setLeader(true);
  //   const aevent = e.currentTarget.getAttribute('ind');
  //   setActiveNav(aevent);
  // }

  // function slideEvents() {
  //   setEvent(!slideEvent);
  //   setLeader(true);
  //   setActiveNav('#event');
  //   // Events.style.backgroundColor = 'yellow'
  // }
  // function slideLeaderboard() {
  //   setLeader(!slideLeader);
  //   setEvent(true);
  //   setActiveNav('#leaderboard');
  // }
  // function names() {
  //   setActiveNav('#name');
  //   slideIn();
  // }
  // function abouts() {
  //   setActiveNav('#about');
  //   slideIn();
  // }
  // function sponsors() {
  //   setActiveNav('#sponsors');
  //   slideIn();
  // }
  // function showNav() {
  //   setNav(!slideNav);
  //   setEvent(true);
  //   setLeader(true);
  // }
  function slidemobile() {
    // setEvent(true);
    document.querySelector('.leader').style.display = 'none';
  }
  function sliding() {
    // setEvent(true);
    document.querySelector('.leader').style.display = 'block';
  }

  return (
    <div>
      {1 && (
        <div className="leader">
          {width < 800 && (
            <div className="back" onClick={slidemobile}>
              <IoIosArrowBack />
            </div>
          )}
          <div className="token-event" onClick={eventName}>
            <div className="digism event-name" onClick={checkNav}>
              <a href="#"> Digism</a>
            </div>
            <div className="ichip event-name" onClick={checkNav}>
              <a href="#">I-chip</a>
            </div>
            <div className="devbits event-name" onClick={checkNav}>
              <a href="#">Devbits</a>
            </div>
            <div className="commnet event-name" onClick={checkNav}>
              <a href="#">Commnet</a>
            </div>
            <div className="xiota event-name" onClick={checkNav}>
              <a href="#">X-iota</a>
            </div>
            <div className="cassandra event-name" onClick={checkNav}>
              <a href="#">Cassandra</a>
            </div>
            <div className="mosaic event-name" onClick={checkNav}>
              <a href="#">Mosaic</a>
            </div>
            <div className="funckit event-name" onClick={checkNav}>
              <a href="#">Funckit</a>
            </div>
          </div>
        </div>
      )}

      <div className="getback" onClick={sliding}>
        <MdArrowForwardIos />
      </div>

      <Nav active="#event" />
      <div className="events-main" onClick={slidemobile}>
        <div className="event-body">
          <div className="event-heading">
            <div className="events-heading-box">EVENTS</div>
          </div>
          <div className="event-img">
            <img src={bg} />
          </div>
          <div className="event-title">{eventTitle}</div>
          <div className="event-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          <div className="event-buttons">
            <div className="ps-link">PS LINK</div>
            <div className="event-submit">SUBMIT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
