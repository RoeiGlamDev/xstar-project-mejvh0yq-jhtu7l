import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>CleanSSR</h1>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-reviews">
                    <h2>What Our Clients Say</h2>
                    <p>"CleanSSR did an amazing job! Highly recommend!"</p>
                    <p>"Professional and thorough cleaning service."</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CleanSSR. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;