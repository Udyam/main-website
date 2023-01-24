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
            <img src={window.sessionStorage.getItem('imageUrl')} alt="caR" />
          </div>
        </Link>
      </div>
      <div className="false"></div>
    </div>
  );
};

export default Profile;
