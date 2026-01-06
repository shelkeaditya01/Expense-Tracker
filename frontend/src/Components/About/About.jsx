import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About EASY-WALLET</h2>
            <p className="about-subtitle">
              Your trusted partner in financial management and expense tracking
            </p>
            <div className="about-description">
              <p>
                EASY-WALLET was born from the simple idea that managing your finances shouldn't be complicated. 
                We believe everyone deserves access to powerful financial tools that are both intuitive and effective.
              </p>
              <p>
                Our platform combines cutting-edge technology with user-friendly design to help you track expenses, 
                analyze spending patterns, and make informed financial decisions. Whether you're a student managing 
                your first budget or a professional tracking complex expenses, EASY-WALLET adapts to your needs.
              </p>
              <p>
                Join thousands of users who have already taken control of their financial future with EASY-WALLET.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>10K+</h3>
                <p>Active Users</p>
              </div>
              <div className="stat">
                <h3>$2M+</h3>
                <p>Tracked Expenses</p>
              </div>
              <div className="stat">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-card">
              <h3>Why Choose EASY-WALLET?</h3>
              <ul>
                <li>✓ Simple and intuitive interface</li>
                <li>✓ Advanced analytics and insights</li>
                <li>✓ Bank-level security</li>
                <li>✓ Multi-platform support</li>
                <li>✓ Real-time synchronization</li>
                <li>✓ Customizable categories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;