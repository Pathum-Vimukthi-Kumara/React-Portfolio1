import React, { useState, useEffect } from 'react';
import './About.css';

const images = [
  { src: 'about1.jpg', description: 'Cybersecurity Workshop' },
  { src: 'competition.jpg', description: 'Programming Competition' },
  { src: 'about.jpg', description: 'University Campus' },
  { src: 'volunteering.jpg', description: 'Volunteering Event' },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

 
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm Pathum Vimukthi, a Computer Engineering student at the Faculty of Engineering, University of Ruhuna.
        I'm passionate about cybersecurity and continually seek to expand my knowledge and skills in this field.
        I enjoy exploring new developments in technology and am particularly interested in how cybersecurity shapes and secures our digital world.
      </p>

      {/* Image Display */}
      <div className="image-gallery">
        <button className="gallery-button" onClick={prevImage} aria-label="Previous Image">{"<"}</button>
        
        <div className="image-frame">
          <img
            src={`${process.env.PUBLIC_URL}/${images[currentIndex].src}`}
            alt={images[currentIndex].description}
            className="gallery-image"
          />
        </div>
        
        <button className="gallery-button" onClick={nextImage} aria-label="Next Image">{">"}</button>
      </div>
    </div>
  );
};

export default About;
