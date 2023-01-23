import React from 'react';
import './Sponsor.css';
import codechef from './images/Codechef.jpg';
import nvidia from './images/Nvidia.png';
import mentor from './images/Mentor.jpg';
import silence from './images/Silence.png';
import coins from './images/Coins.jpg';
import cisco from './images/Cisco.png';

const Sponsors = () => {
  return (
    <div className="msponsers">
      <h1>SPONSORS</h1>
      <div className="msponsorBox">
        <div className="msponser msponser1">
          <img src={codechef} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser2">
          <img src={nvidia} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser3">
          <img src={coins} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser4">
          <img src={cisco} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser5">
          <img src={mentor} alt="" style={{ width: '100%' }} />
        </div>
        <div className="msponser msponser6">
          <img src={silence} alt="" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
