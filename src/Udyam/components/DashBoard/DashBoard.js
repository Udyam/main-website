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
                <img src="#" alt="Qr-Code" />
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
        <div className="Teams">
          <h1>Teams</h1>
          <div className="name-Event">
            <div className="logo-event">
              <img src="https://images.unsplash.com/photo-1673669024894-4b56f413c8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80" alt="img" />
              <h2>Devbits</h2>
            </div>
            <div className="text-event">
              <h2>UserName</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nisi, sed nemo dolor temporibus rerum, voluptate accusantium ducimus corporis et in voluptatibus repellendus ullam consequuntur?</p>
            </div>
          </div>
        </div>

        <h2 className="add-Teams">+ Add Teams</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <h3>Card 1</h3>
              <button className="register-btn">Register</button>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Card 3</h3>
              <button className="register-btn">Register</button>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Card 3</h3>
              <button className="register-btn">Register</button>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Card 4</h3>
              <button className="register-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
