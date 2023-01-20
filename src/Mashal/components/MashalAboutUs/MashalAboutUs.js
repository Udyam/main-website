import React from 'react';
import './MashalAboutUs.css';
import MashalAboutUsImage from '../image/MashalAboutusImage.png';
import FacebookIcon from '../image/akar-icons_facebook-fill.svg';
import TwitterIcon from '../image/akar-icons_twitter-fill.svg';
import WorldIcon from '../image/tabler_world.svg';
import InstagramIcon from '../image/akar-icons_instagram-fill.svg';
const MashalAboutUs = () => {
  return (
    <>
      <div className="mashal-bg"></div>
      <div className="mashal-aboutUs-main-container">
        <h1 className="heading-about-us">ABOUT US</h1>
        <div className="mashal-aboutUS-inner-container">
          <div>
            <img className="aboutUs-image" src={MashalAboutUsImage} alt="" />
          </div>
          <div className="aboutUS-paragraph">
            <h2 style={{ color: 'white' }}>MASHAL</h2>
            <p>
              Mashal is the sports festival of the department of Electronics Engineering, IIT (BHU) Varanasi. It offers a venue for all significant competitions and sports to foster good sportsmanship among the students. The event covers numerous sports, including Marathon, Chess, Valorant, Table Tennis, Basketball, Tennis, Football, Cricket, Badminton, Kabaddi, Athletics, and Tug of War. Mashal
              unleashes the competitive spirit of the nations brightest minds and offers a perfect arena for sports enthusiasts to face off against one another. As said by Serena Williams, lets overpower, overtake and overcome!
            </p>
          </div>
        </div>
        <div className="social-icons">
          <a href="#">
            <img src={FacebookIcon} alt="" style={{ height: '30px', width: '30px' }} />
          </a>
          <a href="#">
            <img src={TwitterIcon} alt="" style={{ height: '30px', width: '30px' }} />
          </a>
          <a href="#">
            <img src={InstagramIcon} alt="" style={{ height: '30px', width: '30px' }} />
          </a>
          <a href="#">
            <img src={WorldIcon} alt="" style={{ height: '30px', width: '30px' }} />
          </a>
          <p>FOLLOW US :</p>
        </div>
      </div>
    </>
  );
};
export default MashalAboutUs;
