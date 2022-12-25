/* eslint-disable prettier/prettier */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Logo from './Landing/Logo/Logo';
import './Home.css';
import ContentCard from './components/ContentCard/ContentCard';
const Home = () => {
  return (
    <>
      <div className="Home">
        <Navbar />
        <ContentCard />
        <Logo />
      </div>
    </>
  );
};

export default Home;
