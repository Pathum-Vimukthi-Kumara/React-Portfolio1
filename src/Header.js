// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/project', label: 'Projects' },
  { to: '/certificate', label: 'Achievements' },
  { to: '/volunteering', label: 'Volunteering' },
  { to: '/get-in-touch', label: 'Contact' },
  { to: '/about', label: 'About' },
];

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-purple-dark/90 border-b border-purple-secondary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <nav className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 sm:space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-secondary to-purple-primary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-secondary/30 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm sm:text-lg">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold gradient-text-enhanced">Pathum.dev</h1>
              <p className="text-xs text-purple-light/70 -mt-1">Developer & Cybersecurity Enthusiast</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  location.pathname === link.to 
                    ? 'text-purple-secondary bg-purple-secondary/10' 
                    : 'text-purple-light hover:text-purple-secondary hover:bg-purple-secondary/5'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Active indicator */}
                {location.pathname === link.to && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-secondary/20 to-purple-primary/20 rounded-lg animate-pulse"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-secondary/10 to-purple-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Bottom border indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-purple-secondary transition-all duration-300 group-hover:w-3/4 ${
                  location.pathname === link.to ? 'w-3/4' : ''
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-purple-light hover:text-purple-secondary hover:bg-purple-secondary/10 transition-colors duration-300 touch-target"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 touch-target ${
                  location.pathname === link.to 
                    ? 'text-purple-secondary bg-purple-secondary/10 border-l-4 border-purple-secondary' 
                    : 'text-purple-light hover:text-purple-secondary hover:bg-purple-secondary/5'
                }`}
                onClick={closeMobileMenu}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0  z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
      
      {/* Subtle gradient border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-secondary/30 to-transparent"></div>
    </header>
  );
};

export default Header;
