import './LeaderBoard.css';
import './LB_MobileView.css';
import React from 'react';
import { teamName, teamScore } from './LB_data';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
const LeaderBoard = (props) => {
  // const [slideEvent, setEvent] = useState('false');
  // const [slideLeader, setLeader] = useState(true);
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
    if (width < 800) {
      document.querySelector('.leader').style.display = 'none';
    }
  }
  function sliding() {
    // setEvent(true);
    document.querySelector('.leader').style.display = 'block';
  }
  // function helloNav() {
  //   setNav(true);
  //   setUdyamName(true);
  // }

  // const [contentIndex, setContentIndex] = useState(0);
  const contentIndex = props.contentIndex;
  return (
    <>
      {/* <div className="background">
        <div className="bg"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div> 
      </div> */}

      {1 && (
        <div className="leader lb-leader">
          {width <= 800 && (
            <div className="back" onClick={slidemobile}>
              <IoIosArrowBack />
            </div>
          )}
          <div className="token-event">
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
      <div className="lb-coming-soon">COMING SOON</div>
      <div className="leaderboards-main-container">
        <h1>LEADERBOARDS</h1>
        <div className="lb-container">
          <div className="podium-main-container">
            <div className="mobile-first-position">
              <div className="img-and-score">
                <img src="/assets/medals/gold.png" alt="" />
                <div className="team-score" style={{ height: '10vh' }}>
                  {teamScore[contentIndex].first}
                </div>
              </div>
              {/* <div className="middle-glow"></div> */}
              <div className="team-name">{teamName[contentIndex].first}</div>
            </div>
            <div className="second-position">
              <div className="img-and-score">
                <img src="/assets/medals/silver.png" alt="" />
                <div className="team-score" style={{ height: '11vh' }}>
                  {teamScore[contentIndex].second}
                </div>
              </div>
              {/* <div className="middle-glow"></div> */}
              <div className="team-name">{teamName[contentIndex].second}</div>
            </div>
            <div className="first-position">
              <div className="img-and-score">
                <img src="/assets/medals/gold.png" alt="" />
                <div className="team-score" style={{ height: '11vh' }}>
                  {teamScore[contentIndex].first}
                </div>
              </div>
              {/* <div className="middle-glow"></div> */}
              <div className="team-name">{teamName[contentIndex].first}</div>
            </div>
            <div className="third-position">
              <div className="img-and-score">
                <img src="/assets/medals/bronze.png" alt="" />
                <div className="team-score" style={{ height: '11vh' }}>
                  {teamScore[contentIndex].third}
                </div>
              </div>
              {/* <div className="middle-glow"></div> */}
              <div className="team-name">{teamName[contentIndex].third}</div>
            </div>
          </div>
          <div className="remaining-leaderboard">
            <div className="leaderboard-box">
              <div className="leaderboard-position" style={{ width: '15%' }}>
                4th
              </div>
              <div className="team-name-non-podium" style={{ width: '65%' }}>
                {teamName[contentIndex].fourth}
              </div>
              <div className="team-score-non-podium" style={{ width: '20%' }}>
                {teamScore[contentIndex].fourth}
              </div>
            </div>
            <div className="leaderboard-box">
              <div className="leaderboard-position" style={{ width: '15%' }}>
                4th
              </div>
              <div className="team-name-non-podium" style={{ width: '65%' }}>
                {teamName[contentIndex].fifth}
              </div>
              <div className="team-score-non-podium" style={{ width: '20%' }}>
                {teamScore[contentIndex].fifth}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
