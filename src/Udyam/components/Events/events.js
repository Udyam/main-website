import './events.css';
import right from './images/right.png';
import left from './images/left.png';
import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import './../Nav/Nav.css';

const eventitem = new Map([
  ['DIGISIM', 0],
  ['I-CHIP', 1],
  ['DEVBITS', 2],
  ['COMMNET', 3],
  ['X-IOT-A', 4],
  ['CASSANDRA', 5],
  ['MOSAIC', 6],
  ['FUNCKIT', 7]
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
    title: 'X-IOT-A',
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
    // setEventtable(false);
    console.log(element);
  };
  // console.log(data[0]);
  const [width, setWidth] = useState(window.innerWidth);

  function checkNav() {
    if (width > 800) {
      return;
    } else {
      // document.querySelector('.leader').style.display = 'none';
      setEventtable(false);
      // setEventnav(false);
      // if (document.querySelector('.udyam-nav') != null) {
      // document.querySelector('.udyam-nav').style.display = 'none';
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
      setEventtable(false);
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
            <div className="0 digism event-name" onClick={checkNav}>
              <a href="#" className="0">
                {/* {' '} */}
                Digisim
              </a>
            </div>
            <div className="1 ichip event-name" onClick={checkNav}>
              <a href="#" className="1">
                I-Chip
              </a>
            </div>
            <div className="2 devbits event-name" onClick={checkNav}>
              <a href="#" className="2">
                DevBits
              </a>
            </div>
            <div className="3 commnet event-name" onClick={checkNav}>
              <a href="#" className="3">
                CommNet
              </a>
            </div>
            <div className="4 xiota event-name" onClick={checkNav}>
              <a href="#" className="4">
                X-Iot-A
              </a>
            </div>
            <div className="5 cassandra event-name" onClick={checkNav}>
              <a href="#" className="5">
                Cassandra
              </a>
            </div>
            <div className="6 mosaic event-name" onClick={checkNav}>
              <a href="#" className="6">
                Mosaic
              </a>
            </div>
            <div className="7 funckit event-name" onClick={checkNav}>
              <a href="#" className="7">
                Funckit
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="getback-btn" onClick={sliding}>
        <MdArrowForwardIos />
      </div>

      <div className="udyam-events-main" onClick={slidemobile}>
        <div className="udyam-event-body">
          <div className="udyam-event-heading">
            <div className="udyam-events-heading-box">EVENTS</div>
          </div>
          <div className="udyam-event-img">
            <img src={'/assets/events/' + eventData.title + '.png'} />
          </div>
          <div className="udyam-event-title">{eventData.title}</div>
          <div className="udyam-event-desc">{eventData.description}</div>
          <div className="udyam-event-buttons">
            <div className="ps-link">PROBLEM STATEMENT</div>
            <div className="udyam-event-submit">SUBMIT</div>
          </div>
          <div className="udyam-event-arrows">
            <img id="left" src={left} alt="" onClick={lastone} />
            <img id="right" src={right} alt="" onClick={nextone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
