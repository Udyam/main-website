import React from 'react';
import './Udyam.css';
// import Events from './components/Events/events';
// import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Nav from './components/Nav/Nav';
// import About from './components/about/about';

const Udyam = () => {
  return (
    <>
      <div className="udyam-home grid-cols-2">
        <Nav />
        {/* <Events />
        <LeaderBoard contentIndex={0} />
        <About /> */}
      </div>
    </>
  );
};

export default Udyam;
