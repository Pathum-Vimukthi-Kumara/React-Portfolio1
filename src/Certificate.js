// src/components/Certificate.js

import React, { useState } from 'react';
import './Certificate.css';

const Certificate = () => {
  const certificates = [
    {
      title: 'Introduction to CyberSecurity',
      description: 'Completed the Course and passed all assessments',
      image: 'Introduction_to_Cybersecurity_Badge_page-0001.jpg',
      date: 'September 2024',
      issuer: 'Cisco',
    },
    {
      title: 'MoraXtreme',
      description: 'Out of over 380 teams, we secured 53rd place, gaining invaluable experience and insights throughout the competition',
      date: 'October 2024',
      issuer: 'Moratuwa IEEE Student Branch',
      image: 'TargaryenX - Pathum Vimukthi.jpg',
    },
    {
      title: 'Photoshop',
      description: 'A course on the basics of user interface and user experience design principles.',
      date: 'Aug 2024',
      issuer: 'Udemy',
      image: 'Photoshop.jpeg',
    },
  ];

  const scrollingCertificates = [...certificates, ...certificates, ...certificates, ...certificates];

  return (
    <div className="certificate-page">
      <h1>Certificates</h1>
      <div className="certificate-container">
        {scrollingCertificates.map((certificate, index) => (
          <div className="certificate-block" key={index}>
            <img src={certificate.image} alt={`${certificate.title} Certificate`} className="certificate-image" />
            <h2>{certificate.title}</h2>
            <p className="certificate-description">{certificate.description}</p>
            <div className="certificate-details">
              <span className="certificate-date">{certificate.date}</span>
              <span className="certificate-issuer">{certificate.issuer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
