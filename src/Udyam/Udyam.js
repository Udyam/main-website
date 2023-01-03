import React from 'react';
import './Udyam.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Nav from './components/Nav/Nav';

const Udyam = () => {
  return (
    <>
      <div className="udyam-home">
        <Nav />
        <LeaderBoard contentIndex={0} />
      </div>
    </>
  );
};

export default Udyam;
