import React from 'react';
import './Sponsor.css';
import { FaChevronCircleRight } from 'react-icons/fa';
import codechef from './images/Codechef.jpg';
import nvidia from './images/Nvidia.png';
import mentor from './images/Mentor.jpg';
import tees from './images/Tees.png';
import silence from './images/Silence.png';
import rapid from './images/Rapid.jpg';
import coins from './images/Coins.jpg';
import cisco from './images/Cisco.png';

const Sponsors = () => {
  return (
    <div className="sponsers">
      <h1>PREVIOUS SPONSORS</h1>
      <div className="sponsBox">
        <div className="sponser sponser1">
          <img className="sponsorImage" src={codechef} alt="" style={{ width: '100%' }} />
          <a href="https://www.codechef.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Codechef</h4> <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser2">
          <img className="sponsorImage" src={nvidia} alt="" style={{ width: '100%' }} />
          <a href="https://www.nvidia.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Nvidia</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser3">
          <img className="sponsorImage" src={coins} alt="" style={{ width: '100%' }} />
          <a href="https://www.coinswitch.co" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>CoinSwitch Kuber</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser4">
          <img className="sponsorImage" src={cisco} alt="" style={{ width: '100%' }} />
          <a href="https://www.cisco.in" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Cisco</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser5">
          <img className="sponsorImage" src={mentor} alt="" style={{ width: '100%' }} />
          <a href="https://eda.sw.siemens.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Mentor</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser6">
          <img className="sponsorImage" src={silence} alt="" style={{ width: '100%' }} />
          <a href="https://www.silencelaboratories.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Silence Laboratories</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser7">
          <img className="sponsorImage" src={tees} alt="" style={{ width: '100%' }} />
          <a href="https://www.teeshood.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Teeshood</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser8">
          <img className="sponsorImage" src={rapid} alt="" style={{ width: '100%' }} />
          <a href="https://www.rapidai.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>RapidAI</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
