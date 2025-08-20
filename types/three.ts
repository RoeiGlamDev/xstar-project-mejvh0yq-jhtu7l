import React from 'react';
import './Three.css'; // Importing CSS for styling

const Three: React.FC = () => {
  return (
    <div className="three-container">
      <h2 className="three-title">Our Services</h2>
      <div className="three-services">
        <div className="service">
          <h3>Residential Cleaning</h3>
          <p>Thorough cleaning for your home, ensuring a spotless environment.</p>
        </div>
        <div className="service">
          <h3>Commercial Cleaning</h3>
          <p>Professional cleaning services for offices and commercial spaces.</p>
        </div>
        <div className="service">
          <h3>Deep Cleaning</h3>
          <p>In-depth cleaning that covers every corner of your space.</p>
        </div>
      </div>
      <div className="three-reviews">
        <h2>What Our Clients Say</h2>
        <div className="review">
          <p>"CleanSSR transformed my home! Highly recommend!" - Sarah</p>
        </div>
        <div className="review">
          <p>"Professional and reliable service. Will use again!" - John</p>
        </div>
        <div className="review">
          <p>"Best cleaning service I've ever hired!" - Emily</p>
        </div>
      </div>
    </div>
  );
};

export default Three;