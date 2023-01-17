/* eslint-disable prettier/prettier */
import React from 'react';
import './ContentCard.css';
import { Link } from 'react-router-dom';

function ContentCard(props) {
  const eventData = props.event;
  return (
    <div className="contentCard">
      <div className="contentContainer">
        <Link to={`/${eventData.title}`}>
          <div className="logoContainer">
            <img className="logo" height={'100px'} src={eventData.imgUrl} alt="" />
          </div>
        </Link>
        <div className="descriptionContainer">
          <p className="description">{eventData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
