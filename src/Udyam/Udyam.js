import React from 'react';
import './Udyam.css';
import Events from './components/Events/events';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Nav from './components/Nav/Nav';
import About from './components/about/about';
import HomePage from './components/HomePage/HomePage';

const Udyam = () => {
  return (
    <>
      <div className="udyam-home grid-cols-2">
        <Nav />
        <HomePage />
        <About />
        <Events />
        <LeaderBoard contentIndex={0} />
      </div>
    </>
  );
};

export default Udyam;
