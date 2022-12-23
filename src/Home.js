import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Logo from './Landing/Logo/Logo';
import './Home.css';
const Home = () => {
  return (
    <>
      <div className="Home">
        <Navbar />
        <Logo />
      </div>
    </>
  );
};

export default Home;
