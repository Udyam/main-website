import React from 'react';
import './AboutUs.css';
import bg from './images/AboutUs.png';

function AboutUs() {
  return (
    <>
      <div className="contain">
        <div className="head">
          <h1>ABOUT US</h1>
        </div>
        <div className="base">
          <div className="base1"></div>
          <div className="base2"></div>
          <div className="base3"></div>
          <div className="base4"></div>
        </div>
        <div className="main-box">
          <div className="box">
            <div className="content-box">
              <h3>UDYAM</h3>
              <div className="content">
                <p>
                  UDYAM is the Annual Technical Festival of the Department of Electronics
                  Engineering, IIT (BHU) Varanasi. UDYAM offers an opportunity for students to treat
                  themselves to a technical extravaganza. It gives you a chance to be more actively
                  involved in the learning experience at the heart of effective technology
                  integration. It is a means for students to showcase their practical talent in
                  their learning and not just limit themselves to theoretical knowledge. With this
                  idea of an application-oriented approach, UDYAM started in 2010 with a vision of
                  providing a platform for the community of Indian students to develop and showcase
                  their technical prowess. It is not just these head to head competitions that you
                  can get at Udyam. It is the events that make you proficient with the industry
                  standards. The limelight is on you.
                </p>
              </div>
            </div>
            <div className="squares">
              <div className="square1"></div>
              <div className="square2">
                <img src={bg} alt="" />
              </div>
            </div>
          </div>
          <div className="dots">
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dot-pair">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
