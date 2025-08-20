'use client';

import React, { useState } from 'react';
import './Slider.css'; // Assuming you have a CSS file for styling

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            image: 'slide1.jpg', // Replace with actual image paths
            title: 'Professional Cleaning Services',
            description: 'We provide top-notch cleaning services tailored to your needs.'
        },
        {
            image: 'slide2.jpg',
            title: 'Eco-Friendly Products',
            description: 'Our cleaning products are safe for you and the environment.'
        },
        {
            image: 'slide3.jpg',
            title: 'Satisfaction Guaranteed',
            description: 'Your satisfaction is our priority, or your money back!'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div className="slider-content">
                <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
                <h2>{slides[currentIndex].title}</h2>
                <p>{slides[currentIndex].description}</p>
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Slider;