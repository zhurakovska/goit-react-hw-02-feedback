import React from 'react';

// import { nanoid } from 'nanoid';

import {
  Container,
  Title,
  ButtonGroup,
  Button,
  GoodButton,
  NeutralButton,
  BadButton,
  StatisticsTitle,
  Statistic,
} from './Feedback.styled';

export class Feedback extends React.Component {
  render() {
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <ButtonGroup>
          <GoodButton type="button">Good</GoodButton>
          <NeutralButton type="button">Neutral</NeutralButton>
          <BadButton type="button">Bad</BadButton>
        </ButtonGroup>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <Statistic>Good:</Statistic>
        <Statistic>Neutral:</Statistic>
        <Statistic>Bad:</Statistic>
      </Container>
    );
  }
}
