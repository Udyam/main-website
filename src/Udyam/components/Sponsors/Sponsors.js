import React from 'react';
import './Sponsor.css';
import { FaChevronCircleRight } from 'react-icons/fa';

const Sponsors = () => {
  return (
    <div className="sponsers">
      <h1>PREVIOUS SPONSORS</h1>
      <div className="sponsBox">
        <div className="sponser sponser1">
          <a href="https://www.codechef.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Codechef</h4> <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser2">
          <a href="https://www.nvidia.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Nvidia</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser3">
          <a href="https://www.coinswitch.co" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>CoinSwitch Kuber</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser4">
          <a href="https://www.cisco.in" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Cisco</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser5">
          <a href="https://eda.sw.siemens.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Mentor</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser6">
          <a href="https://www.silencelaboratories.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Silence Laboratories</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser7">
          <a href="https://www.teeshood.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Teeshood</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser8">
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
