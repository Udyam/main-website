import './sponsors.css';
import PropTypes from 'prop-types';
// import cisco from './images/cisco.svg';

function SponsorCard(props) {
  return (
    <>
      <div className="sponsor-card">
        <div className="sponsor-image">
          <img src={props.image.default}></img>
        </div>
        <div className="sponsor-content">
          <div className="sponsor-title">{props.title}</div>
          <div className="sponsor-description">{props.description}</div>
          <div className="learn-more-btn">
            <a href={props.link}>LEARN MORE</a>
          </div>
        </div>
      </div>
    </>
  );
}

SponsorCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default SponsorCard;
