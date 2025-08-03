import React from 'react';
import Projects from './Project';
import Certificate from './Certificate';

const Portfolio = () => (
  <div className="custom-home-root">
    <div className="custom-home-main">
      <div className="custom-home-left">
        <h1 className="custom-home-title" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="gradient-text">Portfolio</span>
        </h1>
        <Projects />
        <div style={{ margin: '60px 0 0 0' }}>
          <Certificate />
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
