import React from 'react';
import './Sponsor.css';
import { FaChevronCircleRight } from 'react-icons/fa';

const Sponsors = () => {
  return (
    <div className="sponsers">
      <h1>SPONSORS</h1>
      <div className="sponsBox">
        <div className="sponser sponser1">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Microsoft</h4> <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser2">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Google</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser3">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>CodeChef</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser4">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Airtel</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser5">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Amazon</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser6">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Capgemini</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser7">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Wipro</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser8">
          <a href="https://www.wipro.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Flipkart</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
