import './mhome.css';
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
          <p className="tpx">LEADERBOARD</p>
          <p className="tpx">EVENTS</p>
          <p className="tpx">ABOUT US</p>
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
        <img src={instax} className="pxet" alt="" />
        <img src={twitterx} className="pxet" alt="" />
        <img src={fbx} className="pxet" alt="" />
        <img src={worldx} className="pxet" alt="" />
        <img src={followx} className="pxd" alt="" />
      </div>
      <div className="five"></div>
    </div>
  );
}

export default Mhome;
