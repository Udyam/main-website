/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import './Logo.css';
import './CircularButton.css';

const Logo = (props) => {
  const [angle, setAngle] = React.useState(window.innerWidth > 600 ? 0 : 270);

  const logoClick = () => {
    document.getElementsByClassName('dial-button')[0].animate(
      [
        // keyframes
        { transform: 'rotate(' + angle + 'deg)' },

        { transform: 'rotate(' + (angle + 120) + 'deg)' }
        // { transform: 'scale(1)' }
      ],
      {
        // timing options
        duration: 800,
        iterations: 1,
        fill: 'forwards'
      }
    );
    setAngle(angle + 120);
    props.eventchange();
  };
  const animateImg = () => {
    document.getElementsByClassName('main-event-logo')[0].animate(
      [
        // keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
      ],
      {
        // timing options
        duration: 1200,
        iterations: Infinity,
        fill: 'forwards'
      }
    );
  };

  useEffect(() => {
    animateImg();
  }, []);

  return (
    <div className="container-logo">
      <div className="empty-div"></div>
      <div className="main-container-for-logo">
        <div className="circular-mai-container"></div>
        {/* <img className="circuit-img" src="/Groupouter-circuit.png" alt="" /> */}
        <div className="main-logo-container">
          <div className="ring-box-1" onClick={logoClick}>
            <img height={'150%'} className="rings" src="/assets/New Rings/inner_ring.svg" alt="" />
            <img height={'180%'} className="rings ring-middle" src="/assets/New Rings/middle_ring.svg" alt="" />
            <img height={'150%'} className="rings dotted-ring" src="/assets/New Rings/dotted_circle.svg" alt="" />
            <img height={'150%'} className="rings ring-7" src="/assets/rings/7.png" alt="" />
            <img height={'150%'} className="rings ring-8" src="/assets/rings/8.png" alt="" />
            <img height={'180%'} className="rings ring-4" src="/assets/rings/4.png" alt="" />
            <img height={'150%'} className="rings ring-3" src="/assets/rings/3.png" alt="" />

            <img height={'209.6%'} className="dial-button" src="/assets/New Rings/Group 1950withbg.svg" alt="" onClick={logoClick} />
            {/* <div className="glass-lens"></div> */}
          </div>

          <img className="main-event-logo" height={'100vh'} src="/assets/eeslogo.svg" alt="" onClick={logoClick} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
