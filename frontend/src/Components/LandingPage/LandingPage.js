import React from 'react';
import Hero from '../Hero.jsx';
import Features from '../Features.jsx';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <Hero onGetStarted={onGetStarted} />
      <Features />
    </div>
  );
};
export default LandingPage;