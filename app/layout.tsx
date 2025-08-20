import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css'; // Assuming a CSS module for styles

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CleanSSR - Your Cleaning Solution</title>
        <meta name="description" content="Professional cleaning services for homes and offices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>CleanSSR</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;