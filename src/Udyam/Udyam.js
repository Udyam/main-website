import React from 'react';
import './Udyam.css';
import Events from './components/Events/events';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
const Udyam = () => {
  return (
    <>
      <div className="udyam-home">
        <Events />
        <LeaderBoard />
      </div>
    </>
  );
};

export default Udyam;
