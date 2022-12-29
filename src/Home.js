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
  const [eventindex,setEventIndex] = React.useState(0);
  const changeEvent = () => {
    if(eventindex < eventData.length-1){
      setEventIndex(eventindex+1);
    }
    else{
      setEventIndex(0);
    }
  }
  return (
    <>
      <div className="Home">
        <Navbar />
        <ContentCard event={eventData[eventindex]} />
        <Logo eventchange = {changeEvent} />
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
