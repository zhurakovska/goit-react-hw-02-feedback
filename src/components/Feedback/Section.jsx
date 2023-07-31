import React from 'react';
import { Title } from './Feedback.styled';

export const Section = ({ children, title }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};
