import './events.css';
import bg from './bg2.png';
import right from './right.png';
import left from './left.png';
import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import './../Nav/Nav.css';

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

const data = [
  {
    title: 'DIGISIM',
    description: 'Gain mastery of digital system designing and computer architecture by designing optimized digital systems and simulating them on Proteus. Grab this chance to put to test your debugging and logic-building skills.'
  },
  {
    title: 'I-CHIP',
    description: 'Design, simulate, validate, and debug digital systems, from flip-flops to microprocessors. Work with Verilog HDL and get your hands on FPGA Boards through this Verilog-based event.'
  },
  {
    title: 'DEVBITS',
    description: 'Get the hang of two of the most sought-after verticals under the programming umbrella. Test your critical thinking abilities with a competitive-programming round. Work on creating highly functional web applications built using industry-sought tech stacks.'
  },
  {
    title: 'COMMNET',
    description: 'Become proficient in Network Architecture and MATLAB implementation of coding theory, compression algorithms, signal processing, modulation and demodulation techniques, designing and simulating analog circuits & filters to perform computations using CAD tools.'
  },
  {
    title: 'X-IOTA',
    description: 'Propose and implement a solution to a real-world problem with the help of the booming technology of the Internet of Things involving circuit designing and the incorporation of hardware and software.'
  },
  {
    title: 'CASSANDRA',
    description: 'Prove yourself a good data analyst by designing a model that learns and optimizes the dataset provided, implementing Machine Learning algorithms in industrial problems and gain exposure to the ABCs of data science.'
  },
  {
    title: 'MOSAIC',
    description: 'Get the opportunity to decipher canonical problems based on the intriguing subject of Machine Learning and Computer Vision. Know about deep learning and image processing inside out and acquire expertise in machine learning.'
  },
  {
    title: 'FUNCKIT',
    description: 'Test your problem-solving abilities through low-level programming and building gate-level circuitry to optimize the logic and hardware and decrease execution time.'
  }
];

// console.log(copyeventitem.get(2));

function Events() {
  const [eventData, setEventData] = useState(data[0]);
  const [eventtable, setEventtable] = useState(true);
  // const [eventnav, setEventnav] = useState(false);
  const eventName = (event) => {
    var element = event.target.classList[0];
    setEventData(data[element]);
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
    var i = eventitem.get(`${eventData.title}`);
    i = i - 1;
    if (i === -1) {
      i = 7;
    }
    // console.log(eventitem.get(`${eventTitle}`));
    // console.log(copyeventitem.get(i));
    setEventData(data[i]);
  }

  function nextone() {
    var i = eventitem.get(`${eventData.title}`);
    i = i + 1;
    if (i === 8) {
      i = 0;
    }
    // console.log(eventitem.get(`${eventTitle}`));
    // console.log(copyeventitem.get(i));
    setEventData(data[i]);
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
              <a href="#" className="0">
                {' '}
                Digisim
              </a>
            </div>
            <div className="ichip event-name" onClick={checkNav}>
              <a href="#" className="1">
                I-Chip
              </a>
            </div>
            <div className="devbits event-name" onClick={checkNav}>
              <a href="#" className="2">
                DevBits
              </a>
            </div>
            <div className="commnet event-name" onClick={checkNav}>
              <a href="#" className="3">
                CommNet
              </a>
            </div>
            <div className="xiota event-name" onClick={checkNav}>
              <a href="#">X-IoT-A</a>
              <a href="#" className="4">
                X-Iot-A
              </a>
            </div>
            <div className="cassandra event-name" onClick={checkNav}>
              <a href="#" className="5">
                Cassandra
              </a>
            </div>
            <div className="mosaic event-name" onClick={checkNav}>
              <a href="#" className="6">
                Mosaic
              </a>
            </div>
            <div className="funckit event-name" onClick={checkNav}>
              <a href="#" className="7">
                Funckit
              </a>
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
          <div className="event-title">{eventData.title}</div>
          <div className="event-desc">{eventData.description}</div>
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
