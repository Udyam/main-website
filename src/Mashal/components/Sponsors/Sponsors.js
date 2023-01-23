import React from 'react';
import './Sponsor.css';
import codechef from './images/Codechef.jpg';
import nvidia from './images/Nvidia.png';
import mentor from './images/Mentor.jpg';
import silence from './images/Silence.png';
import coins from './images/Coins.jpg';
import cisco from './images/Cisco.png';

const Sponsors = () => {
  const onhover = (e) => {
    setTimeout(() => {
      e.target.style.opacity = '.65';
    }, 2000);
    e.target.style.opacity = '1';
  };
  return (
    <div className="msponsers">
      <h1>SPONSORS</h1>
      <div className="msponsorBox">
        <div className="msponser msponser1" onMouseEnter={onhover}>
          <img src={codechef} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser2" onMouseEnter={onhover}>
          <img src={nvidia} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser3" onMouseEnter={onhover}>
          <img src={coins} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser4" onMouseEnter={onhover}>
          <img src={cisco} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser5" onMouseEnter={onhover}>
          <img src={mentor} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser6" onMouseEnter={onhover}>
          <img src={silence} alt="" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
