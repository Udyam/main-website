import React from 'react';
import './UdgamAbout.css';
const UdgamAbout = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">ABOUT UDGAM</h1>
      <div className="about-content">
        <p>
          Udgam is the Annual Cultural Festival of the department of Electronics Engineering, IIT (BHU) Varanasi. It brings you multifarious events that kindle your creative side and awaken your artistic self. EES introduced Udgam at the start of 2022 to provide a platform for participants to showcase their talents in non-technical fields like fine arts, dance, music, photography, and literature.
          Udgam is back again, bigger and brighter, and awaiting to witness the vigour its participants would bring to the stage. Get ready to manifest your artistry and let your creative self sparkle!
        </p>
      </div>
      <div className="about-image-shadow"></div>
      <img className="about-image" src="/assets/about.png" alt="" />
    </div>
  );
};

export default UdgamAbout;
