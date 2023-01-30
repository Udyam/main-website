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
          <img className="img" src={cisco} alt="" style={{ width: '100%' }} />
          <div className="mcontent">
            <div className="details">
              <h3>CISCO</h3>
              <p>Take your client onboard seamlessly. </p>
            </div>
          </div>
        </div>
        <div className="msponser msponser2">
          <div>
            <img src={coins} alt="" style={{ width: '100%' }} />
            <div className="mcontent">
              <div className="details">
                <h3>COINSWITCH</h3>
                <p>Take your client onboard seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="msponser msponser3">
          <div>
            <img src={mentor} alt="" style={{ width: '100%' }} />
            <div className="mcontent">
              <div className="details">
                <h3>MENTOR</h3>
                <p>Take your client onboard seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="msponser msponser4">
          <div>
            <img src={codechef} alt="" style={{ width: '100%' }} />
            <div className="mcontent">
              <div className="details">
                <h3>CODECHEF</h3>
                <p>Take your client onboard seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="msponser msponser5">
          <div>
            <img src={nvidia} alt="" style={{ width: '100%' }} />
            <div className="mcontent">
              <div className="details">
                <h3>NVIDIA</h3>
                <p>Take your client onboard seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="msponser msponser6">
          <div>
            <img src={silence} alt="" style={{ width: '100%' }} />
            <div className="mcontent">
              <div className="details">
                <h3>SILENCE</h3>
                <p>Take your client onboard seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
