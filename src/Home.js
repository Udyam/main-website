/* eslint-disable prettier/prettier */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Logo from './Landing/Logo/Logo';
import './Home.css';
import ContentCard from './components/ContentCard/ContentCard';
import Speakers from './components/Speakers/Speakers';
import Sponsors from './components/Sponsors/sponsors';
import Footer from './components/footer/footer';
import About from './components/AboutUS/AboutUs';
import Faq from './components/faq/Faq';
import Updates from './components/updates/updates';

const Home = () => {
  return (
    <>
      <div className="Home">
        <Navbar />
        <ContentCard />
        <Logo />
        <About />
        <Updates />
        <Sponsors />
        <Speakers />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Home;
