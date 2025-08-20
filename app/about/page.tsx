import React from 'react';
import styles from './About.module.css'; // Assuming you have a CSS module for styles

const AboutPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>About CleanSSR</h1>
                <p>Your trusted cleaning service.</p>
            </header>
            <section className={styles.content}>
                <h2>Who We Are</h2>
                <p>
                    CleanSSR is a premier cleaning company dedicated to providing top-notch cleaning services for homes and businesses. 
                    Our team is committed to delivering exceptional results with a focus on customer satisfaction.
                </p>
            </section>
            <section className={styles.reviews}>
                <h2>What Our Clients Say</h2>
                <div className={styles.review}>
                    <p>"CleanSSR transformed my home! Highly recommend!" - Sarah J.</p>
                </div>
                <div className={styles.review}>
                    <p>"Professional and thorough. Will use again!" - Mark T.</p>
                </div>
                <div className={styles.review}>
                    <p>"Best cleaning service I've ever hired!" - Emily R.</p>
                </div>
            </section>
            <footer className={styles.footer}>
                <p>&copy; 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;