import './Teams.css';
import Navbar from '../Navbar/Navbar';
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
  let TeamArr = [];
  let ArrLen = Object.keys(TeamMemberName[TeamNumber]).length;
  for (let i = 0; i < ArrLen; i++) {
    TeamArr.push(<TeamMemberCard name={TeamMemberName[TeamNumber][i]} Img={MemberImage[TeamNumber][i]} des={Designation[TeamNumber][i]} hover={TeamMemberDetails[TeamNumber][i]} Email={ContactMail[TeamNumber][i]} Instalink={ContactInstagram[TeamNumber][i]} LinkedIn={ContactLinkedIn[TeamNumber][i]} />);
  }
  console.log(TeamArr);
  return (
    <>
      <div className="Teams-Navbar">
        <Navbar />
      </div>
      <div className="Teams-main-container">
        <div className="team-members-main">
          <div className="ct-main">
            <h1>{TeamDomain[TeamNumber]}</h1>
            <div className="Team-cards-container">{TeamArr}</div>
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
