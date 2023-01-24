/* eslint-disable prettier/prettier */
import React from 'react';
import SpeakerCard from './Speaker-card/SpeakerCard';
import './speakers.css';
import person1 from './images/image7.png';
import person2 from './images/image10.png';
import person3 from './images/image11.png';
import person4 from './images/image12.png';

const Speakers = () => {
  const cardContent = [
    {
      name: 'Girish Gupta',
      title: 'Senior Engineering Manager at CISCO',
      backContent: 'Girish Gupta is the Director of Software Engineering at Cisco. He is an esteemed alumnus of IIT(BHU), Varanasi.',
      image: person1,
      links: ['https://www.linkedin.com/in/girishkg/']
    },
    {
      name: 'Aman Kumar',
      title: 'Co-Founder and Director of Teeshood | TedEx Speaker',
      backContent: 'Aman Kumar is the Co Founder and Director of Teeshood and also a TedEx speaker.',
      image: person2,
      links: ['https://www.linkedin.com/in/aman-kumar-a1a63294/']
    },
    {
      name: 'Pankaj Dwivedi',
      title: 'Engineering Manager at Mentor Graphics',
      backContent: 'Pankaj Dwivedi is the Engineering Manager at Mentor Graphics.',
      image: person3,
      links: ['https://www.linkedin.com/in/pankaj-dwivedi-512b8324/']
    },
    {
      name: 'Aman Shreshtha',
      title: 'MS(Research) CSE,IIT Delhi(2020-22) ECE,IIT (BHU) Varanasi 2020',
      backContent: 'Aman Shrestha is a Research Scholar at IIT Delhi and also a distinguished alumnus of IIT(BHU), Varanasi.',
      image: person4,
      links: ['https://www.linkedin.com/in/aman-shreshtha/']
    }
  ];
  return (
    <div id="speakers" className="speakers-container">
      <div className="speakers-gradient"></div>
      <div className="speakers-content">
        <div className="speakers-heading">PREVIOUS SPEAKERS</div>
        <div className="speakers-card-container">
          <div className="speakers-row">
            <SpeakerCard name={cardContent[0].name} title={cardContent[0].title} image={cardContent[0].image} back={cardContent[0].backContent} links={cardContent[0].links} />
            <SpeakerCard name={cardContent[1].name} title={cardContent[1].title} image={cardContent[1].image} back={cardContent[1].backContent} links={cardContent[1].links} />
          </div>
          <div className="speakers-row">
            <SpeakerCard name={cardContent[2].name} title={cardContent[2].title} image={cardContent[2].image} back={cardContent[2].backContent} links={cardContent[2].links} />
            <SpeakerCard name={cardContent[3].name} title={cardContent[3].title} image={cardContent[3].image} back={cardContent[3].backContent} links={cardContent[3].links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
