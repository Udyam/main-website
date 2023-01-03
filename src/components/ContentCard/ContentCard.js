import React from 'react';
import './ContentCard.css';

function ContentCard(props) {
  const eventData = props.event;
  return (
    <div className="contentCard">
      <div className="contentContainer">
        <div className="logoContainer">
          <img className="logo" height={'100px'} src="/assets/udgamlogo.png" alt="" />
        </div>
        <div className="descriptionContainer">
          <h1 className="title">{eventData.title}</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores exercitationem aliquam alias praesentium? Architecto, culpa ipsa aliquam impedit magni a aperiam enim! Eaque aut, odio deserunt expedita quaerat culpa ducimus voluptatem corrupti quo nisi blanditiis minus praesentium vero tempore minima ratione quos fuga. Rerum excepturi nostrum fugit id nesciunt animi assumenda
            tempora laboriosam saepe, dolore nihil, rem unde ad?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
