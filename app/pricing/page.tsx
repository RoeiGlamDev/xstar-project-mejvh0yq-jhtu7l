import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1>CleanSSR Pricing</h1>
                <p>Affordable cleaning services tailored to your needs</p>
            </header>
            <section className="pricing-options">
                <div className="pricing-option">
                    <h2>Basic Cleaning</h2>
                    <p>Starting at $50</p>
                    <ul>
                        <li>Dusting and vacuuming</li>
                        <li>Bathroom cleaning</li>
                        <li>Kitchen surfaces</li>
                    </ul>
                </div>
                <div className="pricing-option">
                    <h2>Deep Cleaning</h2>
                    <p>Starting at $100</p>
                    <ul>
                        <li>Everything in Basic Cleaning</li>
                        <li>Windows and blinds</li>
                        <li>Baseboards and corners</li>
                    </ul>
                </div>
                <div className="pricing-option">
                    <h2>Move In/Out Cleaning</h2>
                    <p>Starting at $150</p>
                    <ul>
                        <li>Comprehensive cleaning</li>
                        <li>Appliance cleaning</li>
                        <li>Cabinet interiors</li>
                    </ul>
                </div>
            </section>
            <section className="reviews">
                <h2>What Our Customers Say</h2>
                <div className="review">
                    <p>"CleanSSR did an amazing job! Highly recommend!"</p>
                    <span>- Sarah J.</span>
                </div>
                <div className="review">
                    <p>"Professional and thorough, will use again!"</p>
                    <span>- John D.</span>
                </div>
                <div className="review">
                    <p>"Best cleaning service I've ever used!"</p>
                    <span>- Emily R.</span>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;