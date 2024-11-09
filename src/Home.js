// src/components/Home.js

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Profile Content */}
      <div className="profile-section">
        <img src={`${process.env.PUBLIC_URL}/pathum.jpg`} alt="Profile" className="profile-photo" />
        <h1>Pathum Vimukthi</h1>
        <p>
          "Hello!, I'm a Computer Engineering student at the Faculty of Engineering, University of Ruhuna. I'm passionate about cybersecurity and continually seek to expand my knowledge and skills in this field. I enjoy exploring new developments in technology and am particularly..."
        </p>
      </div>
    </div>
  );
};

export default Home;
