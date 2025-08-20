import React from 'react';
import './AboutSection.css'; // Assuming a CSS file for styles

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>About CleanSSR</h2>
                <p>
                    At CleanSSR, we believe in providing top-notch cleaning services that leave your space spotless and fresh. Our dedicated team uses eco-friendly products to ensure a safe environment for your family and pets.
                </p>
                <p>
                    With years of experience in the cleaning industry, we pride ourselves on our attention to detail and customer satisfaction. Whether it's residential or commercial cleaning, we tailor our services to meet your needs.
                </p>
            </div>
            <div className="about-reviews">
                <h3>What Our Clients Say</h3>
                <ul>
                    <li>"CleanSSR transformed my home! Highly recommend!" - Sarah J.</li>
                    <li>"Professional and thorough, my office has never looked better!" - Mike T.</li>
                    <li>"Great service and friendly staff!" - Emily R.</li>
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;