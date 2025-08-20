import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientBackgroundStyled = styled.div`
  height: 100vh; // Full height
  width: 100%; // Full width
  background: linear-gradient(270deg, #ffffff, #9b59b6, #ffffff); // White to Purple gradient
  background-size: 400% 400%; // Size for animation
  animation: ${gradientAnimation} 15s ease infinite; // Animation properties
  position: absolute; // Positioning
  top: 0; // Align to top
  left: 0; // Align to left
  z-index: -1; // Behind other components
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundStyled />; // Render the styled component
};

export default GradientBackground;