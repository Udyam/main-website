import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <div>
      <div className="top-bar">
        <h1 className="emma">Emma</h1>
        <Link to="/udyam/name">
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="caR" />
          </div>
        </Link>
      </div>
      <div className="false"></div>
    </div>
  );
};

export default Profile;
