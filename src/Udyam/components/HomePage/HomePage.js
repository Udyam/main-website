import React from 'react';
import './HomePage.css';
import Globe from '../globe/Globe';

function HomePage() {
  return (
    <div className="main-container">
      <h1 className="heading">
        Udyam
        <h5 className="tag-line">Connecting techies around the globe ...</h5>
      </h1>
      <Globe />
    </div>
  );
}

export default HomePage;
