import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styling

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  rating: number; // Assuming a rating out of 5
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, rating }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{content}</p>
        <div className="card-rating">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="star">★</span> // Star for rating
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;