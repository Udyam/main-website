import React from 'react';
import './about.css';
import xd from './images/about_us.png';
// import aboutx from "./images/ABOUT.svg"
export default function About() {
  return (
    <div className="abg">
      <div className="aboutx">
        <div className="columnn imgx">
          <img src={xd} alt="" />
        </div>
        <div className="columnn udy">
          <h1 className="hdx">Udyam</h1>
          <p className="udx">
            UDYAM is the Annual Technical Festival of the Department of Electronics Engineering, IIT (BHU) Varanasi. UDYAM offers an opportunity for students to treat themselves to a technical extravaganza. It gives you a chance to be more actively involved in the learning experience at the heart of effective technology integration. It is a means for students to showcase their practical talent in
            their learning and not just limit themselves to theoretical knowledge. With this idea of an application-oriented approach, UDYAM started in 2010 with a vision of providing a platform for the community of Indian students to develop and showcase their technical prowess. It is not just these head to head competitions that you can get at Udyam. It is the events that make you proficient
            with the industry standards. The limelight is on you.
          </p>
        </div>
      </div>
    </div>
  );
}
