/* eslint-disable prettier/prettier */
import './LeaderBoard.css';
import './LB_MobileView.css';
import React from 'react';
import { teamName, teamScore } from './LB_data';
const LeaderBoard = (props) => {
  // const [contentIndex, setContentIndex] = useState(0);
  const contentIndex = props.contentIndex;
  return (
    <>
      <div className="background">
        <div className="bg"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
      <div className="leaderboards-main-container">
        <h1>LEADERBOARDS</h1>
        <div className="lb-container">
          <div className="podium-main-container">
            <div className="second-position">
              <div className="img-and-score">
                <img src="/assets/medals/silver.png" alt="" style={{ height: '10vh', width: '10vh', float: 'left' }} />
                <div className="team-score" style={{ height: '11vh' }}>
                  {teamScore[contentIndex].second}
                </div>
              </div>
              <div className="middle-glow"></div>
              <div className="team-name">{teamName[contentIndex].second}</div>
            </div>
            <div className="first-position">
              <div className="img-and-score">
                <img src="/assets/medals/gold.png" alt="" style={{ height: '10vh', width: '10vh', float: 'left' }} />
                <div className="team-score" style={{ height: '11vh' }}>
                  {teamScore[contentIndex].first}
                </div>
              </div>
              <div className="middle-glow"></div>
              <div className="team-name">{teamName[contentIndex].first}</div>
            </div>
            <div className="third-position">
              <div className="img-and-score">
                <img src="/assets/medals/bronze.png" alt="" style={{ height: '10vh', width: '10vh', float: 'left' }} />
                <div className="team-score" style={{ height: '11vh' }}>
                  {teamScore[contentIndex].third}
                </div>
              </div>
              <div className="middle-glow"></div>
              <div className="team-name">{teamName[contentIndex].third}</div>
            </div>
          </div>
          <div className="remaining-leaderboard">
            <div className="leaderboard-box">
              <div className="leaderboard-position" style={{ width: '15%' }}>
                4th
              </div>
              <div className="team-name-non-podium" style={{ width: '65%' }}>
                {teamName[contentIndex].fourth}
              </div>
              <div className="team-score-non-podium" style={{ width: '20%' }}>
                {teamScore[contentIndex].fourth}
              </div>
            </div>
            <div className="leaderboard-box">
              <div className="leaderboard-position" style={{ width: '15%' }}>
                4th
              </div>
              <div className="team-name-non-podium" style={{ width: '65%' }}>
                {teamName[contentIndex].fifth}
              </div>
              <div className="team-score-non-podium" style={{ width: '20%' }}>
                {teamScore[contentIndex].fifth}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
