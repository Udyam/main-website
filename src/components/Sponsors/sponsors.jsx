import SponsorCard from './sponsorCard';
import './sponsors.css';

const sponsorData = [
  {
    title: 'CISCO',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/cisco.svg')
  },
  {
    title: 'COINSWITCH',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/coinswitch.svg')
  },
  {
    title: 'NVIDIA',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/nvidia.svg')
  },
  {
    title: 'CODECHEF',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/codechef.svg')
  },
  {
    title: 'SILVERPUSH',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/silverpush.svg')
  },
  {
    title: 'SILENCE LABS.',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/silentlab.svg')
  },
  {
    title: 'MENTOR',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/mentor.svg')
  },
  {
    title: 'INTEC INFONET',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: require('./images/intec.svg')
  }
];

function Sponsors() {
  return (
    <>
      <div className="sponsors-main">
        <div className="sponsor-heading">SPONSORS</div>
        <ul className="sponsors-list">
          {sponsorData.map((key) => {
            return (
              <li key={key}>
                <SponsorCard title={key.title} description={key.description} image={key.image} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sponsors;
