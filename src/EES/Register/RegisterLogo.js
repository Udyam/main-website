import React from 'react';
import './RegisterLogo.css';

const RegisterLogo = () => {
  return (
    <div className="main-container-for-logo_reg">
      <div className="main-logo-container">
        <div className="ring-box-1">
          <img height={'150%'} className="rings" src="/assets/New Rings/inner_ring.svg" alt="" />
          <img height={'180%'} className="rings ring-middle" src="/assets/New Rings/middle_ring.svg" alt="" />
          <img height={'150%'} className="rings dotted-ring" src="/assets/New Rings/dotted_circle.svg" alt="" />
          <img height={'150%'} className="rings ring-7" src="/assets/rings/7.png" alt="" />
          <img height={'150%'} className="rings ring-8" src="/assets/rings/8.png" alt="" />
          <img height={'180%'} className="rings ring-4" src="/assets/rings/4.png" alt="" />
          <img height={'150%'} className="rings ring-3" src="/assets/rings/3.png" alt="" />

          <img height={'209.8%'} className="dial-button_reg" src="/assets/New Rings/Group 1950withbg.svg" alt="" />
          {/* <div className="glass-lens"></div> */}
        </div>

        <img className="main-event-logo" height={'100vh'} src="/assets/eeslogo.svg" alt="" />
      </div>
    </div>
  );
};

export default RegisterLogo;
