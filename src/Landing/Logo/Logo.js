import React from 'react';
import './Logo.css';

const events = [
  {
    id: 1,
    img: '/assets/eeslogo.svg',
    title: 'EES'
  },
  {
    id: 2,
    img: '/assets/udgamlogo.png',
    title: 'UDGAM'
  }
];

const Logo = () => {
  const [event, setEvent] = React.useState(0);
  const logoClick = () => {
    document.getElementsByClassName('main-event-logo')[0].animate(
      [
        // keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(0)' }
      ],
      {
        // timing options
        duration: 500,
        iterations: 1
      }
    );
    document.getElementsByClassName('ring-6')[0].animate(
      [
        // keyframes
        { transform: 'rotate(0deg) scale(1.3)' },
        { transform: 'rotate(120deg) scale(1.3)' }
        // { transform: 'scale(1)' }
      ],
      {
        // timing options
        duration: 500,
        iterations: 1
      }
    );

    setTimeout(() => {
      if (event === 0) {
        setEvent(1);
      } else {
        setEvent(0);
      }
      // document
      //   .getElementsByClassName('main-event-logo')[0]
      //   .classList.toggle('main-event-logo-leaving');
    }, 500);
  };

  return (
    <div className="main-logo-container">
      <div className="ring-box-1">
        <img className="rings ring-10" src="/assets/rings/10.png" alt="" />
        <img className="rings ring-8" src="/assets/rings/8.png" alt="" />
        <img className="rings ring-7" src="/assets/rings/7.png" alt="" />
        <img className="rings ring-9" src="/assets/rings/9.png" alt="" />
        <img className="rings ring-6" src="/assets/rings/6.png" alt="" />
        <div className="glass-lens"></div>
        {/* on Hover */}
        <div className="glowing-ring"></div>
        <img className="rings ring-4" src="/assets/rings/4.png" alt="" />
      </div>
      <img
        className="main-event-logo"
        src={events[event].img}
        height={'200px'}
        width={'200px'}
        alt=""
        onClick={logoClick}
      />
      <div className="rays"></div>
    </div>
  );
};

export default Logo;
