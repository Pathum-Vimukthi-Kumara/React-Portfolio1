// src/components/Header.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <i className="fas fa-user"></i> <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/certificate" className="nav-link">
            <i className="fas fa-certificate"></i> <span>Certificates</span>
          </Link>
        </li>
        <li>
          <Link to="/project" className="nav-link">
            <i className="fas fa-folder-open"></i> <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link">
            <i className="fas fa-tools"></i> <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/volunteering" className="nav-link">
            <i className="fas fa-hands-helping"></i> <span>Volunteering</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

