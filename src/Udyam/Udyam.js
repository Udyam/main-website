import React from 'react';
import './Udyam.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
const Udyam = () => {
  return (
    <>
      <div className="udyam-home">
        <LeaderBoard contentIndex={0} />
      </div>
    </>
  );
};

export default Udyam;
