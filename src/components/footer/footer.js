import React from 'react';
import './footer.css';
import Main from './images/Main.svg';
import ball from './images/ball.png';
import fb from './images/fb.png';
import google from './images/google.png';
import linkedin from './images/linkedin.png';
import ig from './images/ig.png';
import twitter from './images/twitter.png';
export default function Footer() {
  return (
    <div className="bg">
      <div className="items">
        <a href="https://www.instagram.com/ees_fest/?theme=dark" target="_blank" rel="noreferrer">
          {' '}
          <img src={ig} alt="" className="px" />{' '}
        </a>
        <a href="">
          {' '}
          <img src={ball} alt="" className="px" />
        </a>
        <a href="mailto:ees.ece@itbhu.ac.in?subject=Udyam Query!" target="_blank" rel="noreferrer">
          <img src={google} alt="" className="px" />
        </a>
        <a href="https://www.linkedin.com/company/ees-iit-bhu/" target="_blank" rel="noreferrer">
          {' '}
          <img src={linkedin} alt="" className="px" />
        </a>
        <a href="https://www.facebook.com/ees.fiesta/" target="_blank" rel="noreferrer">
          <img src={fb} alt="" className="px" />
        </a>
        <a href="">
          {' '}
          <img src={twitter} alt="" className="px" />
        </a>
      </div>
      <img src={Main} alt="" className="main" />
    </div>
  );
}
