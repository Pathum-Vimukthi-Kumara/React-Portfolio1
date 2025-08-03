import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import About from './About';
import Certificate from './Certificate';
import Volunteering from './Volunteering';
import Project from './Project';
import GetInTouch from './GetInTouch';
import Portfolio from './Portfolio';

// Handles scroll to section based on path
function ScrollHandler({ sections }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '').toLowerCase();

    const sectionMap = {
      '': sections.homeRef,
      about: sections.aboutRef,
      certificate: sections.certificateRef,
      volunteering: sections.volunteeringRef,
      project: sections.projectRef,
      'get-in-touch': sections.getInTouchRef,
      portfolio: sections.portfolioRef,
    };

    const ref = sectionMap[path];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function MainContent() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certificateRef = useRef(null);
  const volunteeringRef = useRef(null);
  const projectRef = useRef(null);
  const getInTouchRef = useRef(null);
  const portfolioRef = useRef(null);

  const sections = {
    homeRef,
    aboutRef,
    certificateRef,
    volunteeringRef,
    projectRef,
    getInTouchRef,
    portfolioRef,
  };

  return (
    <>
      <ScrollHandler sections={sections} />
      <Header />

      <div ref={homeRef}><Home /></div>
      <div ref={projectRef}><Project /></div>
      <div ref={certificateRef}><Certificate /></div>
      
      
      <div ref={volunteeringRef}><Volunteering /></div>
   
      
      

<div ref={getInTouchRef}><GetInTouch /></div>
<div ref={aboutRef}><About /></div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
