import React from 'react';
import './styles.css'; // Assuming a CSS file for styles

const reviews = [
  { id: 1, name: 'Alice', text: 'CleanSSR did an amazing job! Highly recommend.' },
  { id: 2, name: 'Bob', text: 'Professional and thorough cleaning service.' },
  { id: 3, name: 'Charlie', text: 'My home has never looked better, thanks CleanSSR!' },
];

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">Welcome to CleanSSR</h1>
        <p className="subtitle">Your trusted cleaning service</p>
      </header>
      <main className="content">
        <section className="about">
          <h2>About Us</h2>
          <p>
            At CleanSSR, we provide top-notch cleaning services for homes and offices. Our team is dedicated to delivering a spotless environment for our clients.
          </p>
        </section>
        <section className="reviews">
          <h2>What Our Clients Say</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id} className="review">
                <strong>{review.name}:</strong> {review.text}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;