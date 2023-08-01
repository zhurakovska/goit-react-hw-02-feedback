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

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
