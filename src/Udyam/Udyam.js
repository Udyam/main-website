import React from 'react';
import './Udyam.css';
import Events from './components/Events/events';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
// import Nav from './components/Nav/Nav';

const Udyam = () => {
  return (
    <>
      <div className="udyam-home">
        {/* <Nav /> */}
        <Events />
        <LeaderBoard contentIndex={0} />
      </div>
    </>
  );
};

export default Udyam;
