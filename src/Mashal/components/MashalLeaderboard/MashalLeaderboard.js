import React from 'react';
import './MashalLeaderboard.css';

function MashalLeaderboard() {
  return (
    <div className="leaderboard-background">
      <div className="leaderboard-heading">LEADERBOARD</div>
      <div className="leaderboard-container">
        <div className="heading-container">TOP PLAYERS SCORE</div>
        <div className="leaderboard-score-container">
          <div className="first-team teams">
            <div></div>
            <div>TEAM NAME</div>
            <div className="score">100</div>
          </div>
          <div className="second-team teams">
            <div></div>
            <div>TEAM NAME</div>
            <div className="score">80</div>
          </div>
          <div className="third-team teams">
            <div></div>
            <div>TEAM NAME</div>
            <div className="score">70</div>
          </div>
          <div className="fourth-team teams">
            <div></div>
            <div>TEAM NAME</div>
            <div className="score">60</div>
          </div>
          <div className="fifth-team teams">
            <div></div>
            <div>TEAM NAME</div>
            <div className="score">50</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MashalLeaderboard;
