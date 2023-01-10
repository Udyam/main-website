import './DashBoard.css';
import React from 'react';
const DashBoard = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="db-main-container">
          <div className="db-user-details">
            <div className="qr-and-name">
              <div className="qr">
                <img src="#" alt="NA" />
              </div>
              <div className="userName">
                <h1>Killjoy prime</h1>
              </div>
            </div>
            <div className="userDetails">
              <div className="userEmail padding-between">
                <div className="textSmall">Email</div>
                <div className="textLarge">killjoyprime40@gmail.com</div>
              </div>
              <div className="userCollege padding-between">
                <div className="textSmall">College</div>
                <div className="textLarge">Indian Institute of Technology Varanasi</div>
              </div>
              <div className="userBranch-year padding-between">
                <div className="textSmall">Branch and year of study</div>
                <div className="textLarge">Electronics Engineering Part II</div>
              </div>
              <div className="userPhone padding-between">
                <div className="textSmall">Mobile Number</div>
                <div className="textLarge">1234567890</div>
              </div>
              <div className="userRefferal padding-between">
                <div className="textSmall">Referral Code</div>
                <div className="textLarge">1223456</div>
              </div>
            </div>
          </div>
          <div className="db-radianite">
            <div className="rImage-Score">
              <img className="radianiteImage" src="/assets/radianite.png" alt="" />
              <div className="rPoints" style={{}}>
                <div className="scoreMain">90</div>
              </div>
            </div>
            <div className="radianiteHeading" style={{}}>
              Radianite
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
