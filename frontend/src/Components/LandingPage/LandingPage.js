import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero.jsx';
import Features from '../Features.jsx';
import About from '../About/About.jsx';
import Pricing from '../Pricing/Pricing.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <Navbar onGetStarted={onGetStarted} />
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <About />
      <Pricing onGetStarted={onGetStarted} />
      <Contact />
      <Footer />
    </div>
  );
};
export default LandingPage;