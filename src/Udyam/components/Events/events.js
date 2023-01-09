import './events.css';
import bg from './bg2.png';
// import Nav from '../Nav/Nav';

import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import './../Nav/Nav.css';

function Events() {
  const [eventTitle, setEventTitle] = useState('DIGISIM');
  const [eventtable, setEventtable] = useState(true);
  // const [eventnav, setEventnav] = useState(false);
  const eventName = (event) => {
    var element = event.target;
    setEventTitle(element.innerText);
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

  return (
    <div>
      {(eventtable || width > 800) && (
        <div className="leader">
          <div className="back" onClick={checkNav}>
            <IoIosArrowBack />
          </div>

          <div className="token-event" onClick={eventName}>
            <div className="digism event-name" onClick={checkNav}>
              <a href="#"> Digism</a>
            </div>
            <div className="ichip event-name" onClick={checkNav}>
              <a href="#">I-chip</a>
            </div>
            <div className="devbits event-name" onClick={checkNav}>
              <a href="#">Devbits</a>
            </div>
            <div className="commnet event-name" onClick={checkNav}>
              <a href="#">Commnet</a>
            </div>
            <div className="xiota event-name" onClick={checkNav}>
              <a href="#">X-iota</a>
            </div>
            <div className="cassandra event-name" onClick={checkNav}>
              <a href="#">Cassandra</a>
            </div>
            <div className="mosaic event-name" onClick={checkNav}>
              <a href="#">Mosaic</a>
            </div>
            <div className="funckit event-name" onClick={checkNav}>
              <a href="#">Funckit</a>
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
          <div className="event-img">
            <img src={bg} />
          </div>
          <div className="event-title">{eventTitle}</div>
          <div className="event-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
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
