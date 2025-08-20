import React from 'react';

export type AnimationType = 'fade' | 'slide' | 'zoom' | 'bounce'; // Define possible animation types

interface AnimationProps {
  type: AnimationType; // Type of animation to apply
  duration?: number; // Duration of the animation in milliseconds
  children: React.ReactNode; // Children elements to animate
}

const Animation: React.FC<AnimationProps> = ({ type, duration = 300, children }) => {
  const animationClass = `animate-${type}`; // Construct animation class based on type

  return (
    <div className={animationClass} style={{ transitionDuration: `${duration}ms` }}>
      {children} // Render children with animation
    </div>
  );
};

export default Animation; // Export the Animation component