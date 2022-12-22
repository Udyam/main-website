import React from 'react'
import './Logo.css'
const Logo = () => {
  return (
    <div className="main-logo-container">
      <div className="ring-box-1">
        <img className="rings ring-10" src="/assets/rings/10.png" alt="" />
        <img className="rings ring-8" src="/assets/rings/8.png" alt="" />
        <img className="rings ring-7" src="/assets/rings/7.png" alt="" />
        <img className="rings ring-9" src="/assets/rings/9.png" alt="" />
<div className="glass-lens"></div>
        {/* on Hover */}
        <div className="glowing-ring">

        </div>
        <img className="rings ring-4" src="/assets/rings/4.png" alt="" />
      </div>
      <img className="main-event-logo"src="/assets/eeslogo.svg" alt="" />
      <div className="rays">
        
      </div>
    </div>
  );
}

export default Logo