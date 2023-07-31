import React from 'react';
import { ButtonGroup, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup>
      {options.map(option => (
        <Button name={option.toLowerCase()} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};
