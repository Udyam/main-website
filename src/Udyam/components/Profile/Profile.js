import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import default_img from './default_img.png';
const Profile = () => {
  var userName = 'Udyam';
  var img_url = default_img;
  if (window.sessionStorage.getItem('profileData') != null) {
    console.log(window.sessionStorage.getItem('profileData'));
    JSON.parse(window.sessionStorage.getItem('profileData')).name;
    img_url = window.sessionStorage.getItem('imageUrl');
  }
  var displayName1 = userName.split(' ').slice(0, 2).join(' ');
  return (
    <div>
      <div className="top-bar">
        <h1 className="emma">{displayName1}</h1>
        <Link to="/udyam">
          <div className="profile">
            <img src={img_url} alt="G" />
          </div>
        </Link>
      </div>
      <div className="false"></div>
    </div>
  );
};

export default Profile;
