import './events.css';
import bg from './bg2.png';
import right from './right.png';
import left from './left.png';
import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import './../Nav/Nav.css';

const copyeventitem = new Map([
  [0, 'Digisim'],
  [1, 'I-Chip'],
  [2, 'DevBits'],
  [3, 'CommNet'],
  [4, 'X-IoT-A'],
  [5, 'Cassandra'],
  [6, 'Mosaic'],
  [7, 'Funckit']
]);

const eventitem = new Map([
  ['Digisim', 0],
  ['I-Chip', 1],
  ['DevBits', 2],
  ['CommNet', 3],
  ['X-IoT-A', 4],
  ['Cassandra', 5],
  ['Mosaic', 6],
  ['Funckit', 7]
]);

// console.log(copyeventitem.get(2));

function Events() {
  const [eventTitle, setEventTitle] = useState('Digisim');
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
      // setEventTitle(false);
    }
  }
  function sliding() {
    // setEvent(true);
    setEventtable(true);
    // setEventTitle(true);
    // document.querySelector('.leader').style.display = 'block';
  }

  function lastone() {
    var i = eventitem.get(`${eventTitle}`);
    i = i - 1;
    if (i === -1) {
      i = 7;
    }
    // console.log(eventitem.get(`${eventTitle}`));
    // console.log(copyeventitem.get(i));
    setEventTitle(copyeventitem.get(i));
  }

  function nextone() {
    var i = eventitem.get(`${eventTitle}`);
    i = i + 1;
    if (i === 8) {
      i = 0;
    }
    // console.log(eventitem.get(`${eventTitle}`));
    // console.log(copyeventitem.get(i));
    setEventTitle(copyeventitem.get(i));
  }

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
            <div className="digism event-name" onClick={checkNav}>
              <a href="#"> Digisim</a>
            </div>
            <div className="ichip event-name" onClick={checkNav}>
              <a href="#">I-Chip</a>
            </div>
            <div className="devbits event-name" onClick={checkNav}>
              <a href="#">DevBits</a>
            </div>
            <div className="commnet event-name" onClick={checkNav}>
              <a href="#">CommNet</a>
            </div>
            <div className="xiota event-name" onClick={checkNav}>
              <a href="#">X-IoT-A</a>
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
            <div className="ps-link">Problem Statement</div>
            <div className="event-submit">SUBMIT</div>
          </div>
          <div className="event-arrows">
            <img id="left" src={left} alt="" onClick={lastone} />
            <img id="right" src={right} alt="" onClick={nextone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
