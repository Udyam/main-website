import './events.css';
import bg from './photo.png';
// import Nav from '../Nav/Nav';

import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

function UdgamEvents() {
  const [eventTitle, setEventTitle] = useState('Campus in pixels');
  const [eventtable, setEventtable] = useState(true);
  // const [eventnav, setEventnav] = useState(false);
  const eventName = (event) => {
    var element = event.target;

    if (element.innerText === 'Photography') {
      setEventTitle('Campus in pixels');
    } else {
      setEventTitle(element.innerText);
    }
    setEventtable(false);
    console.log(element);
  };

  const [width, setWidth] = useState(window.innerWidth);

  function checkNav() {
    if (width > 800) {
      return;
    } else {
      // document.querySelector('.leader').style.display = 'none';
      setEventtable(false);
      // setEventnav(false);
      // if (document.querySelector('.udyam-nav') != null) {
      document.querySelector('.udyam-nav').style.display = 'none';
      // }
    }
  }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function slidemobile() {
    // setEvent(true);
    if (width < 800) {
      // document.querySelector('.leader').style.display = 'none';
      setEventTitle(false);
    }
  }
  function sliding() {
    // setEvent(true);
    setEventtable(true);
    // setEventTitle(true);
    // document.querySelector('.leader').style.display = 'block';
  }

  // const moveBack = () => {};
  // const movefwd = () => {};

  return (
    <div>
      {(eventtable || width > 800) && (
        <div className="leader">
          {width < 800 && (
            <div className="back" onClick={checkNav}>
              <IoIosArrowBack />
            </div>
          )}

          <div className="token-event" onClick={eventName}>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Photography</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Dance</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Art</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Music</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Literature</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Treasure Hunt</a>
            </div>
          </div>
        </div>
      )}

      <div className="getback" onClick={sliding}>
        <MdArrowForwardIos />
      </div>
      <div className="events-main" onClick={slidemobile}>
        <div className="event-body">
          <div className="event-heading">
            <div className="events-heading-box">EVENTS</div>
          </div>
          <div className="event-box">
            <div className="event-title">{eventTitle}</div>
            <div className="event-desc-box">
              <div className="event-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
            <div className="event-buttons">
              <div className="register">Register</div>
              <div className="event-submit">SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-img-pc">
        <img src={bg} />
      </div>
      <div className="events-main-mob" onClick={slidemobile}>
        <div className="event-body-mob">
          <div className="event-heading-mob">
            <div className="events-heading-box">EVENTS</div>
          </div>
          <div className="event-box-mob">
            <div className="event-img-mob">
              <img src={bg} />
            </div>
            <div className="event-title">{eventTitle}</div>
            <div className="event-desc-box">
              <div className="event-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
            <div className="event-buttons">
              <div className="register">Register</div>
              <div className="event-submit">SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UdgamEvents;
