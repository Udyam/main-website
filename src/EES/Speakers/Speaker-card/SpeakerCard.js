import React from 'react';
import PropTypes from 'prop-types';
import './speakerCard.css';
import linkedin from '../images/icons8-linkedin-480.png';
import facebook from '../images/icons8-facebook-480.png';
import twitter from '../images/icons8-twitter-480.png';

const SpeakerCard = ({ name, title, image, back }) => {
  return (
    <div className="card-container">
      <div className="speaker-card">
        <div className="card-front">
          <div className="card-front-content">
            <h1>{name}</h1>
            <p>{title}</p>
          </div>
          <div className="card-image">
            <img src={image} />
          </div>
        </div>
        <div className="card-back">
          <p>{back}</p>
        </div>
      </div>
      <div className="links-container-speakers">
        <img src={linkedin} />
        <img src={twitter} />
        <img src={facebook} />
      </div>
    </div>
  );
};

SpeakerCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  back: PropTypes.string
};

export default SpeakerCard;
