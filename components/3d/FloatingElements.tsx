import React from 'react';
import './FloatingElements.css'; // Importing CSS for styling

const FloatingElements: React.FC = () => {
    return (
        <div className="floating-elements">
            <div className="floating-element purple-background">
                <h2>Eco-Friendly Products</h2>
                <p>We use only eco-friendly cleaning supplies to ensure a safe environment.</p>
            </div>
            <div className="floating-element white-background">
                <h2>Professional Team</h2>
                <p>Our team is highly trained and experienced in all aspects of cleaning.</p>
            </div>
            <div className="floating-element purple-background">
                <h2>Customer Satisfaction</h2>
                <p>Your satisfaction is our top priority. We guarantee our work!</p>
            </div>
            <div className="floating-element white-background">
                <h2>Flexible Scheduling</h2>
                <p>We offer flexible scheduling to fit your busy lifestyle.</p>
            </div>
        </div>
    );
};

export default FloatingElements;