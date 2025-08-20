import React from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styles

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page" style={{ backgroundColor: '#ffffff', color: '#6a0dad' }}>
            <header className="contact-header">
                <h1>Contact CleanSSR</h1>
                <p>Your trusted cleaning partner.</p>
            </header>
            <section className="contact-form-section">
                <h2>Get in Touch</h2>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={4} required></textarea>
                    
                    <button type="submit" style={{ backgroundColor: '#6a0dad', color: '#ffffff' }}>Send Message</button>
                </form>
            </section>
            <section className="reviews-section">
                <h2>What Our Clients Say</h2>
                <div className="review">
                    <p>"CleanSSR did an amazing job! Highly recommend!"</p>
                    <p>- Sarah J.</p>
                </div>
                <div className="review">
                    <p>"Professional and thorough. Will use again!"</p>
                    <p>- Mike T.</p>
                </div>
                <div className="review">
                    <p>"Best cleaning service I've ever used!"</p>
                    <p>- Emily R.</p>
                </div>
            </section>
            <footer className="contact-footer">
                <p>&copy; 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;