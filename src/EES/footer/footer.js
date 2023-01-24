/* eslint-disable prettier/prettier */
import React from 'react';
import './footer.css';
import cright from './images/© EES 2023.svg';
// import Main from './images/Main.svg';
import discord from './images/Group 1966.svg';
import fb from './images/Group 1970.svg';
// import google from './images/google.png';
import linkedin from './images/Group 1968.svg';
import ig from './images/Group 1964.svg';
import yt from './images/Group 1978.png';
export default function Footer() {
  return (
    <div className="footerbg">
      <div className="items">
        <a href="https://www.instagram.com/ees_fest/?theme=dark" target="_blank" rel="noreferrer">
          {' '}
          <img src={cright} alt="" className="pxde" />{' '}
        </a>
        <a href="https://www.instagram.com/ees_fest/?theme=dark" target="_blank" rel="noreferrer">
          {' '}
          <img src={ig} alt="" className="px" />{' '}
        </a>
        <a href="https://discord.gg/gNrEW8vp4G" target="_blank" rel="noreferrer">
          {' '}
          <img src={discord} alt="" className="px" />
        </a>
        <a href="https://www.linkedin.com/company/ees-iit-bhu/" target="_blank" rel="noreferrer">
          {' '}
          <img src={linkedin} alt="" className="px" />
        </a>
        <a href="https://www.facebook.com/ees.fiesta/" target="_blank" rel="noreferrer">
          <img src={fb} alt="" className="px" />
        </a>
        <a href="https://www.youtube.com/@EES_IITBHU" target="_blank" rel="noreferrer">
          {' '}
          <img src={yt} alt="" className="px" />
        </a>
      </div>
      {/* <img src={Main} alt="" className="main" /> */}
    </div>
  );
}
