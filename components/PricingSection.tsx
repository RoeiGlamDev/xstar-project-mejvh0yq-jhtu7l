import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const pricingPlans = [
  {
    title: 'Basic Cleaning',
    price: '$100',
    features: ['Dusting', 'Vacuuming', 'Mopping', 'Trash Removal'],
  },
  {
    title: 'Standard Cleaning',
    price: '$150',
    features: ['Basic Cleaning', 'Bathroom Sanitization', 'Kitchen Deep Clean'],
  },
  {
    title: 'Deep Cleaning',
    price: '$250',
    features: ['Standard Cleaning', 'Window Washing', 'Carpet Shampooing'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Our Pricing Plans</h2>
      <div className="pricing-plans">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-plan">
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">{feature}</li>
              ))}
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;