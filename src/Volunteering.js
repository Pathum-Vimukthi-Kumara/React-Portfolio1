import React from 'react';
import './Volunteering.css';

const Volunteering = () => {
  // Sample images for the gallery
  const images = [
    'volunteering.jpg',
    'volunteering.jpg',

   
  ];

  // Duplicate the images array to create a seamless loop effect
  const scrollingImages = [...images, ...images];

  return (
    <div className="volunteering-page">
      <h1>Volunteering</h1>
      <div className="volunteering-content">
        {/* Scrolling Gallery Block */}
        <div className="gallery-block">
          <h2>Volunteering Gallery</h2>
          <div className="gallery-container">
            <div className="image-scroll">
              {scrollingImages.map((image, index) => (
                <img src={image} alt={`Gallery Image ${index + 1}`} key={index} className="gallery-image" />
              ))}
            </div>
          </div>
        </div>

        {/* Description Block */}
        <div className="description-block">
          <h2>About My Volunteering</h2>
          <p>
            I have been involved in various volunteering projects that focus on community service,
            environmental conservation, and education. Each experience has provided invaluable learning
            and personal growth opportunities.
          </p>
          <p>
            From helping in local cleanups to organizing educational workshops, my volunteering journey
            has been rewarding and impactful. Browse through the gallery to see some of the moments captured
            during these initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
