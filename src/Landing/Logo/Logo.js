import React from 'react';
import './Logo.css';
import './CircularButton.css';

const Logo = () => {
  const [angle, setAngle] = React.useState(0);
  const logoClick = () => {
    document.getElementsByClassName('button-container')[0].animate(
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
  };

  return (
    <>
      <div className="main-container-for-logo">
        <div className="main-logo-container">
          <div className="ring-box-1">
            <img height={'400px'} className="rings" src="/assets/New Rings/inner_ring.svg" alt="" />
            <img
              className="rings ring-middle"
              height={'400px'}
              src="/assets/New Rings/middle_ring.svg"
              alt=""
            />
            <img
              className="rings dotted-ring"
              height={'400px'}
              src="/assets/New Rings/dotted_circle.svg"
              alt=""
            />
            <img className="rings ring-7" height={'400px'} src="/assets/rings/7.png" alt="" />
            <img className="rings ring-8" height={'400px'} src="/assets/rings/8.png" alt="" />
            <img className="rings ring-4" height={'400px'} src="/assets/rings/4.png" alt="" />
            <img className="rings ring-3" height={'400px'} src="/assets/rings/3.png" alt="" />

            <div className="glass-lens"></div>
            {/* on Hover */}
            <div className="glowing-ring"></div>
          </div>
          <img
            className="main-event-logo"
            src="/assets/eeslogo.svg"
            height={'200px'}
            width={'200px'}
            alt=""
            onClick={logoClick}
          />
        </div>
        <div className="button-container">
          <img className="dial-button" src="/assets/New Rings/Group 1949dialWithring.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Logo;
