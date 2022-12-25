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
      backContent: '',
      image: person1
    },
    {
      name: 'Aman Kumar',
      title: 'Co-Founder and Director of Teeshood | TedEx Speaker',
      backContent: '',
      image: person2
    },
    {
      name: 'Pankaj Dwivedi',
      title: 'Engineering Manager at Mentor Graphics',
      backContent: '',
      image: person3
    },
    {
      name: 'Aman Shreshtha',
      title: 'MS(Research) CSE,IIT Delhi(2020-22) ECE,IIT (BHU) Varanasi 2020',
      backContent: '',
      image: person4
    }
  ];
  return (
    <div className="speakers-container">
      <div className="speakers-gradient"></div>
      <div className="speakers-content">
        <div className="speakers-heading">SPEAKERS</div>
        <div className="speakers-card-container">
          <div className="speakers-row">
            <SpeakerCard
              name={cardContent[0].name}
              title={cardContent[0].title}
              image={cardContent[0].image}
              back={cardContent[0].backContent}
            />
            <SpeakerCard
              name={cardContent[1].name}
              title={cardContent[1].title}
              image={cardContent[1].image}
              back={cardContent[1].backContent}
            />
          </div>
          <div className="speakers-row">
            <SpeakerCard
              name={cardContent[2].name}
              title={cardContent[2].title}
              image={cardContent[2].image}
              back={cardContent[2].backContent}
            />
            <SpeakerCard
              name={cardContent[3].name}
              title={cardContent[3].title}
              image={cardContent[3].image}
              back={cardContent[3].backContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
