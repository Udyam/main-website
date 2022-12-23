import './updates.css';
function Updates() {
  return (
    <>
      <div className="article"></div>
      <section className="updates-main-container">
        <div className="updates-udyam-head-container">udyam updates</div>
        <div className="updates-udyam-content">
          <h1>UDYAM</h1>
          <div className="flex-cont">
            <div>
              <p>
                Udyam is the Annual Technological Festival of the department of Electronics
                Engineering, IIT (BHU) Varanasi. It brings a broad spectrum of events spanning Data
                Science, Machine Learning, Digital and Analog Electronics and others to boost the
                participants skill sets. Since 2010, Udyam has provided a platform to develop and
                showcase the technical skills of Indian technocrats. And we are pleased to announce
                that the grand event is again returning this spring as UDYAM 23!
              </p>
            </div>
            <div className="images">
              <img
                src="https://media.istockphoto.com/id/1404221665/photo/abstract-defocused-lens-color-gradient-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=i-Eqbc0oD8b-Kt7-sARR5n6JXECi0ihjQaRyQK0h6PU="
                alt="Italian Trulli"
              ></img>
            </div>
          </div>
        </div>
        <div className="updates-udgam-head-container">udgam updates</div>
        <div className="updates-udgam-content">
          <h1>UDGAM</h1>
          <div className="flex-cont">
            <div>
              <p>
                Udgam is the Annual Cultural Festival of the department of Electronics Engineering,
                IIT (BHU) Varanasi. It brings you multifarious events that kindle your creative side
                and awaken your artistic self. EES introduced Udgam at the start of 2022 to provide
                a platform for participants to showcase their talents in non-technical fields like
                fine arts, dance, music, photography, and literature. Udgam is back again, bigger
                and brighter, and awaiting to witness the vigour its participants would bring to the
                stage. Get ready to manifest your artistry and let your creative self sparkle!
              </p>
            </div>
            <div className="images">
              {' '}
              <img
                src="https://media.istockphoto.com/id/1404221665/photo/abstract-defocused-lens-color-gradient-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=i-Eqbc0oD8b-Kt7-sARR5n6JXECi0ihjQaRyQK0h6PU="
                alt="Italian Trulli"
              ></img>{' '}
            </div>
          </div>
        </div>

        <div className="updates-mashal-head-container">mashal updates</div>
        <div className="updates-mashal-content">
          <h1>MASHAL</h1>
          <div className="flex-cont">
            <div>
              <p>
                Mashal is the sports festival of the department of Electronics Engineering, IIT
                (BHU) Varanasi.It offers a venue for all significant competitions and sports to
                foster good sportsmanship among the students.Even though it started last year, the
                event covers numerous sports, including Marathon, Chess, Valorant, Table Tennis,
                Basketball, Tennis, Football, Cricket, Badminton, Kabaddi, Athletics, and Tug of
                War. Mashal unleashes the competitive spirit of the nations brightest minds and
                offers a perfect arena for sports enthusiasts to face off against one another. As
                said by Serena Williams,the lets overpower, overtake and overcome!
              </p>
            </div>
            <div className="images">
              <img
                src="https://media.istockphoto.com/id/1404221665/photo/abstract-defocused-lens-color-gradient-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=i-Eqbc0oD8b-Kt7-sARR5n6JXECi0ihjQaRyQK0h6PU="
                alt="Italian Trulli"
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="article"></div> */}
    </>
  );
}

export default Updates;
