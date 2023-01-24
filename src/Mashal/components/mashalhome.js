import './mhome.css';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import React from 'react';
// import bg2 from './image/Mashal-Home2.png';
import logod from './image/MASHAL LOGO.svg';
import mtext from './image/HEADING.svg';
import elogo from './image/EES-LOGO.svg';
import instax from './image/akar-icons_instagram-fill.svg';
import twitterx from './image/akar-icons_twitter-fill.svg';
import fbx from './image/akar-icons_facebook-fill.svg';
import worldx from './image/tabler_world.svg';
import followx from './image/FOLLOW US_.svg';
function Mhome() {
  return (
    <div className="bgxd">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three">
        {/* <img src={bg2} className='bg3' alt="" /> */}
        <div className="navx">
          <Link to="/mashal/leaderboard">
            <p className="tpx">LEADERBOARD</p>
          </Link>
          <Link to="/mashal/events">
            <p className="tpx">EVENTS</p>
          </Link>
          <Link to="/mashal/about">
            <p className="tpx">ABOUT US</p>
          </Link>

          <Link to="/mashal/sponsors">
            <p className="spx">sponsors ↗</p>
          </Link>
        </div>
        <div className="textx">
          <img src={mtext} className="mtext" alt="" />
          <img src={elogo} className="elogo" alt="" />
        </div>
        <div className="logox">
          <img src={logod} className="logod" alt="" />
        </div>
      </div>
      <div className="fourth">
        <a href="https://www.instagram.com/mashal_ees/">
          <img src={instax} className="pxet" alt="" />
        </a>
        <a href="https://www.youtube.com/@EES_IITBHU ">
          {' '}
          <img src={twitterx} className="pxet" alt="" />
        </a>
        <a href="https://www.facebook.com/ees.fiesta/">
          <img src={fbx} className="pxet" alt="" />
        </a>
        <a href="https://discord.gg/gNrEW8vp4G">
          <img src={worldx} className="pxet" alt="" />
        </a>
        <a href="#">
          <img src={followx} className="pxd" alt="" />
        </a>
      </div>
      <div className="five"></div>
    </div>
  );
}

export default Mhome;
