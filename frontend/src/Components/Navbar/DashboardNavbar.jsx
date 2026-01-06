import React, { useState, useEffect } from 'react';
import './Navbar.css';

const DashboardNavbar = ({ onLogout }) => {
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

  const handleBackToLanding = () => {
    window.location.reload(); // Simple way to go back to landing page
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-brand" onClick={handleBackToLanding} style={{ cursor: 'pointer' }}>
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
          <button className="nav-link" onClick={handleBackToLanding}>Home</button>
          <button className="nav-link">Dashboard</button>
          <button className="nav-link">Reports</button>
          <button className="nav-link">Settings</button>
        </div>

        {/* CTA Buttons */}
        <div className="navbar-actions">
          <button className="btn-login">Profile</button>
          <button className="btn-signup" onClick={onLogout}>Logout</button>
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
          <button className="mobile-nav-link" onClick={() => { handleBackToLanding(); toggleMenu(); }}>Home</button>
          <button className="mobile-nav-link" onClick={toggleMenu}>Dashboard</button>
          <button className="mobile-nav-link" onClick={toggleMenu}>Reports</button>
          <button className="mobile-nav-link" onClick={toggleMenu}>Settings</button>
        </div>
        <div className="mobile-menu-actions">
          <button className="btn-login mobile" onClick={toggleMenu}>Profile</button>
          <button className="btn-signup mobile" onClick={() => { onLogout(); toggleMenu(); }}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;