/* eslint-disable prettier/prettier */
import './Leaderboard.css';
import { useState } from 'react';
import React from 'react';
const teamName = [
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  },
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  },
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  },
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  },
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  },
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  },
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  },
  {
    first: 'teamname1',
    second: 'teamname2',
    third: 'teamname3',
    fourth: 'teamname4',
    fifth: 'teamname5'
  }
];
const teamScore = [
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  },
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  },
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  },
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  },
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  },
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  },
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  },
  {
    first: '100',
    second: '90',
    third: '80',
    fourth: '70',
    fifth: '60'
  }
];
const LeaderBoard = () => {
  const [contentIndex, setContentIndex] = useState(0);
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
      <div className="leaderboardNav-main-container">
        <div
          className="event-name-holder"
          onClick={() => {
            if (contentIndex !== 0) {
              setContentIndex(0);
            }
            console.log(contentIndex);
          }}
        >
          event1
        </div>
        <div
          className="event-name-holder"
          onClick={() => {
            setContentIndex(1);
            console.log(contentIndex);
          }}
        >
          event2
        </div>
        <div
          className="event-name-holder"
          onClick={() => {
            setContentIndex(2);
            console.log(contentIndex);
          }}
        >
          event3
        </div>
        <div
          className="event-name-holder"
          onClick={() => {
            setContentIndex(3);
            console.log(contentIndex);
          }}
        >
          event4
        </div>
        <div
          className="event-name-holder"
          onClick={() => {
            setContentIndex(4);
            console.log(contentIndex);
          }}
        >
          event5
        </div>
        <div
          className="event-name-holder"
          onClick={() => {
            setContentIndex(5);
            console.log(contentIndex);
          }}
        >
          event6
        </div>
        <div
          className="event-name-holder"
          onClick={() => {
            setContentIndex(6);
            console.log(contentIndex);
          }}
        >
          event7
        </div>
        <div
          className="event-name-holder"
          onClick={() => {
            setContentIndex(7);
            console.log(contentIndex);
          }}
        >
          event8
        </div>
      </div>
      <div className="leaderboards-main-container">
        <div className="leaderboards-heading-container">LEADERBOARDS</div>
        <div className="podium-main-container">
          <div className="second-position">
            <img
              src="./silver-medal.png"
              alt=""
              style={{ height: '10vh', width: '10vh', float: 'left' }}
            />
            <div className="team-score" style={{ height: '11vh' }}>
              {teamScore[contentIndex].second}
            </div>
            <div className="team-name">{teamName[contentIndex].second}</div>
          </div>
          <div className="first-position">
            <img
              src="./gold-medal.png"
              alt=""
              style={{ height: '10vh', width: '10vh', float: 'left' }}
            />
            <div className="team-score" style={{ height: '11vh' }}>
              {teamScore[contentIndex].first}
            </div>
            <div className="team-name">{teamName[contentIndex].first}</div>
          </div>
          <div className="third-position">
            <img
              src="./bronze-medal.png"
              alt=""
              style={{ height: '10vh', width: '10vh', float: 'left' }}
            />
            <div className="team-score" style={{ height: '11vh' }}>
              {teamScore[contentIndex].third}
            </div>
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
    </>
  );
};

export default LeaderBoard;
