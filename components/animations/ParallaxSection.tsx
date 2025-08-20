import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: url('/path/to/your/image.jpg') no-repeat center center fixed; // Background image for parallax effect
  background-size: cover;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  background-color: rgba(128, 0, 128, 0.7); // Semi-transparent purple background
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0 0;
`;

const ParallaxSection: React.FC = () => {
  return (
    <ParallaxContainer>
      <Content>
        <Title>Welcome to CleanSSR</Title>
        <Subtitle>Your trusted cleaning service</Subtitle>
      </Content>
    </ParallaxContainer>
  );
};

export default ParallaxSection;