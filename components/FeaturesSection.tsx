import React from 'react';
import './FeaturesSection.css'; // Assuming you have a CSS file for styles

const featuresData = [
  {
    title: 'Eco-Friendly Products',
    description: 'We use only environmentally safe cleaning products to ensure a healthy space for you and your family.',
  },
  {
    title: 'Experienced Professionals',
    description: 'Our team is trained and experienced in delivering top-notch cleaning services tailored to your needs.',
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'We stand by our work. If you’re not satisfied, we’ll make it right.',
  },
  {
    title: 'Flexible Scheduling',
    description: 'We offer flexible scheduling options to fit your busy lifestyle. Book us at your convenience.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose CleanSSR?</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;