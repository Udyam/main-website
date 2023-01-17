/* eslint-disable prettier/prettier */
import React from 'react';
import Navbar from './Navbar/Navbar';
import ContentCard from './ContentCard/ContentCard';
import Logo from './Logo/Logo';
import './Home.css';
import Speakers from './Speakers/Speakers';
import Faq from './faq/Faq';
import Footer from './footer/footer';
import Updates from './updates/updates';
import About from './AboutUS/AboutUs';
import Sponsors from './Sponsors/sponsors.jsx';

const eventData = [
  {
    title: 'Udyam',
    description: 'lorem ipsum',
    imgUrl: '/assets/udayam.png'
  },

  {
    title: 'Mashal',
    description: 'lorem ipsum',
    imgUrl: '/assets/udayam.png'
  },
  {
    title: 'Udgam',
    description: 'lorem ipsum',
    imgUrl: '/assets/udayam.png'
  }
];

const Home = () => {
  const [eventindex, setEventIndex] = React.useState(0);
  const changeEvent = () => {
    if (eventindex < eventData.length - 1) {
      setEventIndex(eventindex + 1);
    } else {
      setEventIndex(0);
    }
  };
  return (
    <>
      <div className="Home">
        <Navbar />
        <div className="landing">
          <ContentCard event={eventData[eventindex]} />
          <Logo eventchange={changeEvent} />
        </div>

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
