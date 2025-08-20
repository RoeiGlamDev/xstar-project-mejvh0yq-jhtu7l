'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 200,
    });

    sr.reveal('.reveal', { origin: 'bottom' }); // Reveal elements from the bottom
  }, []);

  return (
    <div>
      <div className="reveal">
        <h2>Welcome to CleanSSR</h2>
        <p>Your trusted cleaning service.</p>
      </div>
      <div className="reveal">
        <h3>Our Services</h3>
        <ul>
          <li>Residential Cleaning</li>
          <li>Commercial Cleaning</li>
          <li>Deep Cleaning</li>
          <li>Move In/Out Cleaning</li>
        </ul>
      </div>
      <div className="reveal">
        <h3>Customer Reviews</h3>
        <p>"CleanSSR did an amazing job!" - Jane D.</p>
        <p>"Highly recommend their services!" - John S.</p>
      </div>
    </div>
  );
};

export default ScrollRevealComponent;