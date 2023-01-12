import React from 'react';
import './Sponsor.css';
import { FaChevronCircleRight } from 'react-icons/fa';

const Sponsors = () => {
  return (
    <div className="sponsers">
      <h1>SPONSORS</h1>
      <div className="sponsBox">
        <div className="sponser sponser1">
          <div className="sp">
            <h4>Microsoft</h4> <FaChevronCircleRight className="info spicon" />
          </div>
        </div>
        <div className="sponser sponser2">
          <div className="sp">
            <h4>Google</h4>
            <FaChevronCircleRight className="info spicon" />{' '}
          </div>
        </div>
        <div className="sponser sponser3">
          <div className="sp">
            <h4>CodeChef</h4>
            <FaChevronCircleRight className="info spicon" />{' '}
          </div>
        </div>
        <div className="sponser sponser4">
          <div className="sp">
            <h4>Airtel</h4>
            <FaChevronCircleRight className="info spicon" />{' '}
          </div>
        </div>
        <div className="sponser sponser5">
          <div className="sp">
            <h4>Amazon</h4>
            <FaChevronCircleRight className="info spicon" />{' '}
          </div>
        </div>
        <div className="sponser sponser6">
          <div className="sp">
            <h4>Capgemini</h4>
            <FaChevronCircleRight className="info spicon" />
          </div>
        </div>
        <div className="sponser sponser7">
          <div className="sp">
            <h4>Wipro</h4>
            <FaChevronCircleRight className="info spicon" />
          </div>
        </div>
        <div className="sponser sponser8">
          <div className="sp">
            <h4>Flipkart</h4>
            <FaChevronCircleRight className="info spicon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
