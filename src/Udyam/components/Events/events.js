import './events.css';
import bg from './background.svg';
import Nav from '../Nav/Nav';
import { useState } from 'react';
// import LeaderBoard from '../LeaderBoard/LeaderBoard';

function Events() {
  const [eventTitle, setEventTitle] = useState('DIGISIM');
  const eventName = (event) => {
    var element = event.target;
    setEventTitle(element.innerHTML);
    document.querySelector('.active').classList.remove('active');
    element.classList.add('active');
    console.log(element);
  };

  return (
    <div>
      <Nav eventTitleFunc={eventName} />
      <div className="events-main">
        <div className="event-body">
          <div className="event-heading">
            <div className="events-heading-box">EVENTS</div>
          </div>
          <div className="event-img">
            <img src={bg} />
          </div>
          <div className="event-title">{eventTitle}</div>
          <div className="event-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className="event-buttons">
            <div className="ps-link">PS LINK</div>
            <div className="event-submit">SUBMIT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
