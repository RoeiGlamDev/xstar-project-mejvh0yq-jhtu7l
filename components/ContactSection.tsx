import React from 'react';
import './ContactSection.css'; // Importing CSS for styling

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
            <div className="container">
                <h2 style={{ color: '#6a1b9a' }}>Get in Touch with CleanSSR</h2>
                <p style={{ color: '#333', marginBottom: '30px' }}>
                    We are here to help you with all your cleaning needs. Reach out to us for a free quote!
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={4} required></textarea>
                    </div>
                    <button type="submit" style={{ backgroundColor: '#6a1b9a', color: '#fff' }}>
                        Send Message
                    </button>
                </form>
                <div className="reviews" style={{ marginTop: '40px' }}>
                    <h3 style={{ color: '#6a1b9a' }}>What Our Clients Say</h3>
                    <blockquote>
                        <p style={{ color: '#333' }}>"CleanSSR did an amazing job! Highly recommend!"</p>
                        <cite style={{ color: '#6a1b9a' }}>- Sarah J.</cite>
                    </blockquote>
                    <blockquote>
                        <p style={{ color: '#333' }}>"Professional and efficient service. Will use again!"</p>
                        <cite style={{ color: '#6a1b9a' }}>- Mark T.</cite>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;