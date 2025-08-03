import React, { useState } from 'react';
import './Skills.css';

const skillCategories = {
  'Cyber Security': [
    'Web Application Security',
    'Penetration Testing',
  ],
  'Front-end Development': [
    'React',
    'Bootstrap',
    'JavaScript',
  ],
  'Back-end Development': [
    'Node/Express',
    'Java/SpringBoot',
  ],
  'Databases': [
    'MySQL',
    'MongoDB',
    'MariaDB',
  ],
  'DevOps & Cloud Computing': [
    'Linux',
    'CI/CD',
    'Docker',
    'Jenkins',
    'AWS',
  ],
  'Tools & Technologies': [
    'Metasploit',
    'Nmap',
    'Burp Suite',
    'Git',
    'Jira',
  ],
  'Low-Level Development': [
    'C',
    'C++',
    'Assembly',
  ],
  'Soft Skills': [
    'Project Management',
    'Communication',
    'Critical Thinking',
    'Leadership',
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Cyber Security');

  return (
    <div className="min-h-screen bg-purple-gradient pt-20 py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left side - Skills display */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent">
              Skills
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-purple-accent mb-4 sm:mb-6">Select a Category</h2>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-6">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-purple-secondary text-white border-purple-primary'
                      : 'bg-white text-purple-primary border-purple-secondary hover:bg-purple-secondary/10'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Active category skills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skillCategories[activeCategory].map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-card border border-purple-secondary/40 text-purple-light px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-secondary/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm sm:text-base">{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right side - image */}
          <div className="flex-shrink-0">
            <img
              src={`${process.env.PUBLIC_URL}/assets/pathum3.jpg`}
              alt="Pathum Vimukthi"
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-purple-secondary shadow-lg shadow-purple-secondary/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
