import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get current scroll position
    const windowHeight = window.innerHeight; // Get window height
    const triggerPoint = 200; // Set trigger point for animation

    if (scrollY > triggerPoint) {
      setIsVisible(true); // Set visibility to true if scrolled past trigger point
    } else {
      setIsVisible(false); // Reset visibility
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return isVisible; // Return visibility state
};

export default useScrollAnimation;