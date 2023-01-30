import './udgamEvents.css';

import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

function UdgamEvents() {
  const events = [
    {
      id: 1,
      genre: 'Photography',
      subEvents: ['Campus in Pixels', 'Life in Kashi'],
      desc: 'The feelings for this centuries-old city remain the same, whatever changes. In this era of fleeting moments, Udgam gives you the opportunity to discover your inner photographer and capture the beauty of the campus and the city. So, pick up your cameras and show the world the beauty of Kashi.',
      subEventsImg: ['campusInPixels', 'lifeInKashi']
    },
    {
      id: 2,
      genre: 'Dance',
      desc: '“Do it big, do it right, and do it with style.” - Fred Astaire If you have the potential to sweep the audience off their feet and dance to the top, then Udgam’s stage is the right place to exhibit your talent. Udgam presents its dance event for you to make the move on the beat.',
      subEvents: ['Ignite'],
      subEventsImg: ['ignite']
    },
    {
      id: 3,
      genre: 'Art',
      desc: 'Do you have a zeal for art and want to compete with the best? If yes, Udgam brings you the opportunity to show your talent at its art event. So, pick up your pencils and paintbrushes, as the time has come to let your imaginations run wild.',
      subEvents: ['India in 2050', 'Character Designing', 'Face Painting'],
      subEventsImg: ['indiaIn2050', 'Character Design', 'facePainting']
    },
    {
      id: 4,
      genre: 'Music',
      desc: '“Where words fail, music speaks.” Udgam is setting the stage for its music event in its new edition. It’s time to showcase the flair of your voice and stun the masses!',
      subEvents: ['Ridham'],
      subEventsImg: ['ridham']
    },
    {
      id: 5,
      genre: 'Literature',
      desc: '“Literature is the immortality of speech”.To keep the spirits of cultural events high, Udgam presents literary events like Poetry, Shayari, and more, with an intent to celebrate the author, the poet, and the orator hidden within you.',
      subEvents: ['Open Mic Stand', 'Creative Writing'],
      subEventsImg: ['openMic', 'creativeWriting']
    },
    {
      id: 6,
      genre: 'Treasure Hunt',
      desc: 'As exciting as it sounds, gear up to become sleuth-hounds! The campus awaits to grace the exquisite event of Treasure Hunt, an unmissable and amazing opportunity to bring out your inner Sherlock and join the blazing quest of finding the enigmatic trove.',
      subEvents: ['Treasure Hunt'],
      subEventsImg: ['treasureHunt']
    }
  ];
  const [eventTitle, setEventTitle] = useState(events[0].subEvents[0]);
  const [eventtable, setEventtable] = useState(true);
  const [whichEvent, setwhichEvent] = useState('Photography');
  const [subEventImg, setsubEventImg] = useState(events[0].subEventsImg[0]);
  const [eventDesc, setEventDesc] = useState(events[0].desc);
  const [circleOne, setCircleOne] = useState(events[0].subEventsImg[1]);
  const [circleTwo, setCircleTwo] = useState(events[0].subEventsImg[1]);
  const [clickct, setClickct] = useState(0);
  const eventName = (event) => {
    var element = event.target;
    setwhichEvent(element.innerText);
    setClickct(0);
    let obj = events.find((o) => o.genre === element.innerText);
    let l = obj.subEvents.length;
    setsubEventImg(obj.subEventsImg[clickct]);
    setEventDesc(obj.desc);
    setEventTitle(obj.subEvents[clickct]);
    setEventtable(false);
    setCircleOne(obj.subEventsImg[(clickct - 1 + l) % l]);
    setCircleTwo(obj.subEventsImg[(clickct + 1) % l]);
    console.log(obj);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const checkNav = () => {
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
  };

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
  const circleOneClicked = () => {
    let obj = events.find((o) => o.genre === whichEvent);
    let l = obj.subEvents.length;

    if (clickct <= 0) {
      setClickct(obj.subEvents.length - 1);
    } else {
      setClickct(clickct - 1);
    }
    setsubEventImg(obj.subEventsImg[clickct]);
    setCircleOne(obj.subEventsImg[(clickct - 1 + l) % l]);
    setCircleTwo(obj.subEventsImg[(clickct + 1) % l]);
    setEventTitle(obj.subEvents[clickct]);
  };
  const circleTwoClicked = () => {
    let obj = events.find((o) => o.genre === whichEvent);
    let l = obj.subEvents.length;
    if (clickct >= obj.subEvents.length - 1) {
      setClickct(0);
    } else {
      setClickct(clickct + 1);
    }
    setEventTitle(obj.subEvents[clickct]);
    console.log(eventTitle);
    setsubEventImg(obj.subEventsImg[clickct]);
    setCircleTwo(obj.subEventsImg[(clickct + 1) % l]);
    setCircleOne(obj.subEventsImg[(clickct - 1 + l) % l]);
    console.log(clickct);
  };
  let obj = events.find((o) => o.genre === whichEvent);
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
              <div className="event-desc">{eventDesc}</div>
            </div>
            <div className="event-buttons">
              <div className="register">Register</div>
              <div className="event-submit">SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-img-pc">
        {obj.subEvents.length > 1 && <img className="circle-one" src={'/assets/udgam-events/images/' + circleOne + '.jpg'} onClick={circleOneClicked} />}
        {obj.subEvents.length > 1 && <img className="circle-two" onClick={circleTwoClicked} src={'/assets/udgam-events/images/' + circleTwo + '.jpg'} />}
        <img className="main-img" src={'/assets/udgam-events/images/' + subEventImg + '.jpg'} />
        {/* <div className="circle-one" onClick={circleOneClicked}>
          <img src={bg1} />
        </div>
        <div className="circle-two" onClick={circleTwoClicked}>
          <img src={bg2} />
        </div>
        <div className="main-img">
          <img src={bg} />
        </div> */}
      </div>
      {/* for mobile view */}
      <div className="events-main-mob" onClick={slidemobile}>
        {obj.subEvents.length > 1 && (
          <div className="circular-btns">
            <img className="circle-one-mob" src="/assets/udgam-events/images/circleOne.png" onClick={circleOneClicked} />
            <img className="circle-two-mob" src="/assets/udgam-events/images/circleTwo.png" onClick={circleTwoClicked} />
          </div>
        )}
        <div className="event-body-mob">
          <div className="event-heading-mob">
            <div className="events-heading-box">{whichEvent}</div>
          </div>
          <div className="event-box-mob">
            <div className="event-img-mob">
              <img src={'/assets/udgam-events/images/' + subEventImg + '.jpg'} />
            </div>
            <div className="event-title-mob">{eventTitle}</div>
            <div className="event-desc-box">
              <div className="event-desc">{eventDesc}</div>
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
