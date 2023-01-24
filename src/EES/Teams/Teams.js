import './Teams.css';
import TeamMemberCard from './TeamMemberCard';
import { TeamMemberName, TeamDomain, Designation, TeamMemberDetails, ContactInstagram, ContactMail, ContactLinkedIn, MemberImage } from './TeamData';
import { useState } from 'react';
const Teams = () => {
  const [TeamNumber, setTeamNumber] = useState(0);
  const changeTeam = (event) => {
    var num = event.target;
    document.querySelector('.active').classList.remove('active');
    num.classList.add('active');
    console.log(num);
    setTeamNumber(num.classList[1]);
  };
  return (
    <>
      <div className="Teams-main-container">
        <div className="team-members-main">
          <div className="ct-main">
            <div className="core-team">
              <h1>{TeamDomain[TeamNumber]}</h1>

              {/* row 1 */}

              <div className="team-row">
                {TeamMemberName[TeamNumber].first.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].first} Img={MemberImage[TeamNumber].first} des={Designation[TeamNumber].first} hover={TeamMemberDetails[TeamNumber].first} Email={ContactMail[TeamNumber].first} Instalink={ContactInstagram[TeamNumber].first} LinkedIn={ContactLinkedIn[TeamNumber].first} /> : []}

                {TeamMemberName[TeamNumber].second.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].second} Img={MemberImage[TeamNumber].second} des={Designation[TeamNumber].second} hover={TeamMemberDetails[TeamNumber].second} Email={ContactMail[TeamNumber].second} Instalink={ContactInstagram[TeamNumber].second} LinkedIn={ContactLinkedIn[TeamNumber].second} /> : []}

                {TeamMemberName[TeamNumber].third.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].third} Img={MemberImage[TeamNumber].third} des={Designation[TeamNumber].third} hover={TeamMemberDetails[TeamNumber].third} Email={ContactMail[TeamNumber].third} Instalink={ContactInstagram[TeamNumber].third} LinkedIn={ContactLinkedIn[TeamNumber].third} /> : []}

                {TeamMemberName[TeamNumber].fourth.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].fourth} Img={MemberImage[TeamNumber].fourth} des={Designation[TeamNumber].fourth} hover={TeamMemberDetails[TeamNumber].fourth} Email={ContactMail[TeamNumber].fourth} Instalink={ContactInstagram[TeamNumber].fourth} LinkedIn={ContactLinkedIn[TeamNumber].fourth} /> : []}
              </div>

              {/* row 2 */}
              <div className="team-row">
                {TeamMemberName[TeamNumber].fifth.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].fifth} Img={MemberImage[TeamNumber].fifth} des={Designation[TeamNumber].fifth} hover={TeamMemberDetails[TeamNumber].fifth} Email={ContactMail[TeamNumber].fifth} Instalink={ContactInstagram[TeamNumber].fifth} LinkedIn={ContactLinkedIn[TeamNumber].fifth} /> : []}

                {TeamMemberName[TeamNumber].sixth.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].sixth} Img={MemberImage[TeamNumber].sixth} des={Designation[TeamNumber].sixth} hover={TeamMemberDetails[TeamNumber].sixth} Email={ContactMail[TeamNumber].fifth} Instalink={ContactInstagram[TeamNumber].sixth} LinkedIn={ContactLinkedIn[TeamNumber].sixth} /> : []}

                {TeamMemberName[TeamNumber].seventh.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].seventh} Img={MemberImage[TeamNumber].seventh} des={Designation[TeamNumber].seventh} hover={TeamMemberDetails[TeamNumber].seventh} Email={ContactMail[TeamNumber].seventh} Instalink={ContactInstagram[TeamNumber].seventh} LinkedIn={ContactLinkedIn[TeamNumber].seventh} /> : []}

                {TeamMemberName[TeamNumber].eighth.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].eighth} Img={MemberImage[TeamNumber].eighth} des={Designation[TeamNumber].eighth} hover={TeamMemberDetails[TeamNumber].eighth} Email={ContactMail[TeamNumber].eighth} Instalink={ContactInstagram[TeamNumber].eighth} LinkedIn={ContactLinkedIn[TeamNumber].eighth} /> : []}
              </div>
              <div className="team-row">
                {TeamMemberName[TeamNumber].ninth.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].ninth} Img={MemberImage[TeamNumber].ninth} des={Designation[TeamNumber].ninth} hover={TeamMemberDetails[TeamNumber].ninth} Email={ContactMail[TeamNumber].ninth} Instalink={ContactInstagram[TeamNumber].ninth} LinkedIn={ContactLinkedIn[TeamNumber].ninth} /> : []}

                {TeamMemberName[TeamNumber].tenth.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].tenth} Img={MemberImage[TeamNumber].tenth} des={Designation[TeamNumber].tenth} hover={TeamMemberDetails[TeamNumber].tenth} Email={ContactMail[TeamNumber].tenth} Instalink={ContactInstagram[TeamNumber].tenth} LinkedIn={ContactLinkedIn[TeamNumber].tenth} /> : []}

                {TeamMemberName[TeamNumber].eleventh.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].eleventh} Img={MemberImage[TeamNumber].eleventh} des={Designation[TeamNumber].eleventh} hover={TeamMemberDetails[TeamNumber].eleventh} Email={ContactMail[TeamNumber].eleventh} Instalink={ContactInstagram[TeamNumber].eleventh} LinkedIn={ContactLinkedIn[TeamNumber].eleventh} /> : []}

                {TeamMemberName[TeamNumber].twelfth.length > 0 ? <TeamMemberCard name={TeamMemberName[TeamNumber].twelfth} Img={MemberImage[TeamNumber].twelfth} des={Designation[TeamNumber].twelfth} hover={TeamMemberDetails[TeamNumber].twelfth} Email={ContactMail[TeamNumber].twelfth} Instalink={ContactInstagram[TeamNumber].twelfth} LinkedIn={ContactLinkedIn[TeamNumber].twelfth} /> : []}
              </div>
              <div className="team-row">
                {TeamMemberName[TeamNumber].thirteenth.length > 0 ? (
                  <TeamMemberCard name={TeamMemberName[TeamNumber].thirteenth} Img={MemberImage[TeamNumber].thirteenth} des={Designation[TeamNumber].thirteenth} hover={TeamMemberDetails[TeamNumber].thirteenth} Email={ContactMail[TeamNumber].thirteenth} Instalink={ContactInstagram[TeamNumber].thirteenth} LinkedIn={ContactLinkedIn[TeamNumber].thirteenth} />
                ) : (
                  []
                )}
              </div>
            </div>
          </div>
          <div className="Teams-Nav">
            <div className="Teams-Nav-1">
              <div className="Teams-Nav-Item 0 active" onClick={changeTeam}>
                CORE TEAM
              </div>
              <div className="Teams-Nav-Item 2" onClick={changeTeam}>
                DEVELOPERS
              </div>
              <div className="Teams-Nav-Item 4" onClick={changeTeam}>
                CONTENT & CREATIVE
              </div>
              <div className="Teams-Nav-Item 6" onClick={changeTeam}>
                EXTERNAL AFFAIRS
              </div>
            </div>
            <div className="Teams-Nav-2">
              <div className="Teams-Nav-Item 1" onClick={changeTeam}>
                SENIOR ADVISORS
              </div>
              <div className="Teams-Nav-Item 3" onClick={changeTeam}>
                DESIGNERS
              </div>
              <div className="Teams-Nav-Item 5" onClick={changeTeam}>
                MARKETING
              </div>
              <div className="Teams-Nav-Item 7" onClick={changeTeam}>
                PUBLIC RELATIONS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Teams;
