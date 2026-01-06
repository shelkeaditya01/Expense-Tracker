import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-brand">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#000"/>
              {/* Wallet shape */}
              <rect x="6" y="10" width="20" height="14" rx="2" fill="#fff"/>
              <rect x="6" y="8" width="20" height="4" rx="2" fill="#fff"/>
              {/* Money/card inside wallet */}
              <rect x="8" y="14" width="16" height="2" rx="1" fill="#000"/>
              <rect x="8" y="17" width="12" height="2" rx="1" fill="#000"/>
              <circle cx="22" cy="15" r="1.5" fill="#000"/>
            </svg>
          </div>
          <span className="brand-name">EASY-WALLET</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <button className="nav-link" onClick={() => scrollToSection('features')}>Features</button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-link" onClick={() => scrollToSection('pricing')}>Pricing</button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        {/* CTA Buttons */}
        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup" onClick={onGetStarted}>Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <button className="mobile-nav-link" onClick={() => scrollToSection('features')}>Features</button>
          <button className="mobile-nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="mobile-nav-link" onClick={() => scrollToSection('pricing')}>Pricing</button>
          <button className="mobile-nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className="mobile-menu-actions">
          <button className="btn-login mobile" onClick={toggleMenu}>Login</button>
          <button className="btn-signup mobile" onClick={() => { onGetStarted(); toggleMenu(); }}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;