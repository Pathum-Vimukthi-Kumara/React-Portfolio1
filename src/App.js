// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './Home.css';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Certificate from './Certificate';
import Skills from './Skills';
import Volunteering from './Volunteering';
import Header from './Header';
import './Footer.css';
import './About.css';
import './Certificate.css';
import './Skills.css';
import './Volunteering.css';
import './Header.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Volunteering" element={<Volunteering />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirects to Home if the route is not found */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
