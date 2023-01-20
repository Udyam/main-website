import React from 'react';
import './mashalEvent.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import lg from './images/mashalLogo.svg';

const MashalEvent = () => {
  return (
    <>
      <div className="event-section">
        <div className="heading-mashal">
          <h1>EVENTS</h1>
        </div>

        <div className="container1">
          <div className="card">
            <figure className="card__thumb">
              <img src={img1} alt="Picture by Kyle Cottrell" className="card__image" />
              <figcaption className="card__caption">
                <h2 className="card__title">LEAGUE OF LEGENDS</h2>
                <p className="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas quo necessitatibus iure aperiam veritatis quaerat doloribus vitae similique perferendis enim, numquam obcaecati!</p>
                <a href="#" className="card__button">
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="card__thumb">
              <img src={img2} alt="Picture by Kyle Cottrell" className="card__image" />
              <figcaption className="card__caption">
                <h2 className="card__title">CALL OF DUTY</h2>
                <p className="card__snippet">Lorem, ipsum dolor sit amet consectetur adipisicing eldolorem, minus, molestias ut in doloribusa amet distinctio mollitia ab perferendis voluptas, aut laboriosam nesciunt?</p>
                <a href="#" className="card__button">
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="card__thumb">
              <img src={img3} alt="Picture by Kyle Cottrell" className="card__image" />
              <figcaption className="card__caption">
                <h2 className="card__title">VALORANT</h2>
                <p className="card__snippet">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officiis consectetur voluptate numquam vel nesciunt maxime soluta id? Aliquid harum quos atque dolorem, nam ullam nihil!</p>
                <a href="#" className="card__button">
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="card">
            <figure className="card__thumb">
              <img src={img4} alt="Picture by Kyle Cottrell" className="card__image" />
              <figcaption className="card__caption">
                <h2 className="card__title">CS: GO</h2>
                <p className="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse sapiente eius laudantium ad autem fugiat nulla. Cumque quis, libero molestias aliquam nam voluptatibus aspernatur.</p>
                <a href="#" className="card__button">
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="four">
            <img src={lg} alt="hw" />
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
            <BsGlobe />
          </div>
        </div>
      </div>
    </>
  );
};
export default MashalEvent;
