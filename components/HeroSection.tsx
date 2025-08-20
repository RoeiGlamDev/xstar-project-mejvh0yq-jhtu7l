import React from 'react';
import './HeroSection.css'; // Assuming you have a CSS file for styles

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to CleanSSR</h1>
        <p className="hero-subtitle">Your trusted cleaning service</p>
        <button className="hero-button">Get a Free Quote</button>
      </div>
      <div className="hero-reviews">
        <h2 className="reviews-title">What Our Clients Say</h2>
        <div className="review">
          <p>"CleanSSR transformed my home!" - Sarah J.</p>
        </div>
        <div className="review">
          <p>"Professional and reliable service!" - Mike T.</p>
        </div>
        <div className="review">
          <p>"Highly recommend CleanSSR!" - Emma L.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;