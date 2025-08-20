import React from 'react';

export const ThreeUtils: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#ffffff', color: '#6a0dad', padding: '20px', borderRadius: '8px' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome to CleanSSR</h1>
            <p style={{ textAlign: 'center' }}>Your trusted cleaning service.</p>
            <section style={{ margin: '20px 0' }}>
                <h2>Our Services</h2>
                <ul>
                    <li>Residential Cleaning</li>
                    <li>Commercial Cleaning</li>
                    <li>Deep Cleaning</li>
                    <li>Move In/Out Cleaning</li>
                </ul>
            </section>
            <section style={{ margin: '20px 0' }}>
                <h2>Customer Reviews</h2>
                <blockquote style={{ borderLeft: '4px solid #6a0dad', padding: '10px', margin: '10px 0' }}>
                    "CleanSSR did an amazing job! Highly recommend!" - Jane D.
                </blockquote>
                <blockquote style={{ borderLeft: '4px solid #6a0dad', padding: '10px', margin: '10px 0' }}>
                    "Professional and thorough service!" - John S.
                </blockquote>
            </section>
            <footer style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>Contact us: info@cleanSSR.com</p>
                <p>© 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ThreeUtils;