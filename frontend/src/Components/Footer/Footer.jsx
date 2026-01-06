import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#000"/>
                <rect x="6" y="10" width="20" height="14" rx="2" fill="#fff"/>
                <rect x="6" y="8" width="20" height="4" rx="2" fill="#fff"/>
                <rect x="8" y="14" width="16" height="2" rx="1" fill="#000"/>
                <rect x="8" y="17" width="12" height="2" rx="1" fill="#000"/>
                <circle cx="22" cy="15" r="1.5" fill="#000"/>
              </svg>
              <span className="footer-brand-name">EASY-WALLET</span>
            </div>
            <p className="footer-description">
              Take control of your finances with our intuitive expense tracking platform. 
              Make smarter financial decisions with powerful insights and analytics.
            </p>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            <div className="footer-section">
              <h3>Product</h3>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#status">Status</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#gdpr">GDPR</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 EASY-WALLET. All rights reserved.
            </p>
            <div className="footer-developer">
              <p>Made by <strong>Aditya Shelke</strong></p>
              <a href="mailto:adishelke10@gmail.com" className="developer-email">
                adishelke10@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;