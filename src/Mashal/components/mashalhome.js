import './mhome.css';
import React from 'react';
// import bg2 from './image/Mashal-Home2.png';
import logod from './image/MASHAL LOGO.svg';
import mtext from './image/HEADING.svg';
import elogo from './image/EES-LOGO.svg';
import insta from './image/akar-icons_instagram-fill.svg';
import twitter from './image/akar-icons_twitter-fill.svg';
import fb from './image/akar-icons_facebook-fill.svg';
import world from './image/tabler_world.svg';
import follow from './image/FOLLOW US_.svg';
function Mhome() {
  return (
    <div className="bg">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three">
        {/* <img src={bg2} className='bg3' alt="" /> */}
        <div className="navx">
          <p>LEADERBOARD</p>
          <p>EVENTS</p>
          <p>ABOUT US</p>
          <p className="spx">sponsors ↗</p>
        </div>
        <div className="textx">
          <img src={mtext} className="mtext" alt="" />
          <img src={elogo} className="elogo" alt="" />
        </div>
        <div className="logox">
          <img src={logod} className="logod" alt="" />
        </div>
      </div>
      <div className="four">
        <img src={insta} className="px" alt="" />
        <img src={twitter} className="px" alt="" />
        <img src={fb} className="px" alt="" />
        <img src={world} className="px" alt="" />
        <img src={follow} className="pxd" alt="" />
      </div>
      <div className="five"></div>
    </div>
  );
}

export default Mhome;
