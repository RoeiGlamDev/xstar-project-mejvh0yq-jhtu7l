import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.8); // white background with transparency
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  backdrop-filter: blur(10px); // glass effect
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #6a0dad; // purple text
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const GlassCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Card>
  );
};

export default GlassCard;