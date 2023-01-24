import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
const Profile = () => {
  var userName = JSON.parse(window.sessionStorage.getItem('profileData')).name;
  var displayName1 = userName.split(' ').slice(0, 2).join(' ');
  return (
    <div>
      <div className="top-bar">
        <h1 className="emma">{displayName1}</h1>
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
