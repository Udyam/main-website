import React from 'react';
import './Udyam.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Nav from './components/Nav/Nav';
// import About from './components/about/about';

const Udyam = () => {
  return (
    <>
      <div className="udyam-home">
        <Nav />
        <LeaderBoard contentIndex={0} />
        {/* <About /> */}
      </div>
    </>
  );
};

export default Udyam;
