const TeamMemberCard = (props) => {
  return (
    <>
      <div className="team-card">
        <div className="member-image">
          <img className="tm-image" src={props.Img} alt="" />
          <div className="content-on-hover">
            <h6>{props.hover}</h6>
            <div className="team-contact-handles">
              <a href={props.LinkedIn}>
                <img src="/assets/TeamsSectionImages/icons8-linkedin 2.svg" alt="" />
              </a>
              <a href={props.Email}>
                <img src="/assets/TeamsSectionImages/icons8-gmail-logo.svg" alt="" />
              </a>
              <a href={props.Instalink}>
                <img src="/assets/TeamsSectionImages/icons8-instagram 2.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="member-details">
          <h4>{props.name}</h4>
          <h6>{props.des}</h6>
        </div>
        <div className="mobile-contact-links">
          <a href={props.LinkedIn}>
            <img src="/assets/TeamsSectionImages/icons8-linkedin 2.svg" alt="" />
          </a>
          <a href={props.Email}>
            <img src="/assets/TeamsSectionImages/icons8-gmail-logo.svg" alt="" />
          </a>
          <a href={props.Instalink}>
            <img src="/assets/TeamsSectionImages/icons8-instagram 2.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
export default TeamMemberCard;
