import React from 'react';
import {
  ButtonGroup,
  GoodButton,
  NeutralButton,
  BadButton,
} from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup>
      <GoodButton name="good" onClick={onLeaveFeedback}>
        Good
      </GoodButton>
      <NeutralButton name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </NeutralButton>
      <BadButton name="bad" onClick={onLeaveFeedback}>
        Bad
      </BadButton>
    </ButtonGroup>
  );
};
