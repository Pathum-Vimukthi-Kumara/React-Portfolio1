import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const skillCategories = {
  'Cyber Security': ['Web Application Security', 'Penetration Testing'],
  'Front-end Development': ['React', 'Bootstrap', 'JavaScript'],
  'Back-end Development': ['Node/Express', 'Java/SpringBoot'],
  'Databases': ['MySQL', 'MongoDB', 'MariaDB'],
  'DevOps & Cloud Computing': ['Linux', 'CI/CD', 'Docker', 'Jenkins', 'AWS'],
  'Tools & Technologies': ['Metasploit', 'Nmap', 'Burp Suite', 'Git', 'Jira'],
  'Low-Level Development': ['C', 'C++', 'Assembly'],
  'Soft Skills': ['Project Management', 'Communication', 'Critical Thinking', 'Leadership'],
};

const Home = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Cyber Security');

  return (
    <div className="min-h-screen bg-purple-gradient pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          
          {/* Profile Image - Top on Mobile, Right on Desktop */}
          <div className="order-1 lg:order-2 lg:w-2/5 flex justify-center mb-8 lg:mb-0 animate-fadeInUp">
            <div className="relative animate-float">
              <img 
                src={process.env.PUBLIC_URL + '/assets/Program Team member - Pathum Vimukthi.jpg'} 
                alt="Pathum Vimukthi" 
                className="profile-image w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-2 sm:border-4 border-purple-secondary shadow-glow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-secondary/20 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:w-3/5 text-center lg:text-left animate-fadeInUp px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-enhanced leading-tight">
              Code. Create. Innovate.
            </h1>
            <h2 className="text-base sm:text-lg lg:text-2xl text-purple-accent font-medium mb-6 sm:mb-8 leading-relaxed">
              Full-Stack Developer & Cybersecurity Enthusiast
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-purple-light leading-relaxed mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
              I blend cutting-edge technology with timeless design principles to create immersive digital experiences. Specializing in scalable web applications, interactive interfaces, and innovative solutions that push the boundaries of what's possible on the web.
            </p>

            {/* Category Buttons */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-purple-accent font-medium mb-4 text-sm sm:text-base">Skill Categories</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm transition-all duration-300 ${
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
            </div>

            {/* Tools/Skills for Selected Category */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-purple-accent font-medium mb-4 text-sm sm:text-base">
                {activeCategory} Skills
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {skillCategories[activeCategory].map((tool) => (
                  <span
                    key={tool}
                    className="bg-purple-card border border-purple-secondary/40 text-purple-light px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-purple-secondary/20 transition-all duration-300 hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8">
  <a
    href={`${process.env.PUBLIC_URL}/assets/pathumcv.pdf`}
    download="Pathum_Vimukthi_CV.pdf"
    className="btn-primary w-full sm:w-auto px-6 py-3 sm:py-4 text-sm sm:text-base touch-target text-center inline-block rounded-lg bg-purple-secondary text-white hover:bg-purple-primary transition duration-300 shadow-md"
  >
    Download Resume
  </a>

           

              <button
                className="btn-secondary w-full sm:w-auto px-6 py-3 sm:py-4 text-sm sm:text-base touch-target"
                onClick={() => navigate('/get-in-touch')}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-purple-accent">
            <span className="text-xs sm:text-sm mb-1 font-medium">Scroll Down</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
