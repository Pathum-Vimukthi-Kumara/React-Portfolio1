// src/components/Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'C/C++', percentage: 80 },
    { name: 'React', percentage: 80 },
    { name: 'HTML & CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'Python', percentage: 70 },
  ];

  return (
    <div className="skill-page">
      <h1>My Skills</h1>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
