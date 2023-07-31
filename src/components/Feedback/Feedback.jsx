import React from 'react';
import {
  Container,
  Title,
  ButtonGroup,
  GoodButton,
  NeutralButton,
  BadButton,
  StatisticsTitle,
  Statistic,
} from './Feedback.styled';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  handleChangeComment = event => {
    const { name } = event.target;
    this.setState(
      prevState => ({ [name]: prevState[name] + 1 }),
      this.countTotalFeedback
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState(
      {
        total: good + neutral + bad,
      },
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    this.setState({
      percentage: total > 0 ? ((good / total) * 100).toFixed(1) : 0,
    });
  };

  render() {
    const { good, neutral, bad, total, percentage } = this.state;
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <ButtonGroup>
          <GoodButton name="good" onClick={this.handleChangeComment}>
            Good
          </GoodButton>
          <NeutralButton name="neutral" onClick={this.handleChangeComment}>
            Neutral
          </NeutralButton>
          <BadButton name="bad" onClick={this.handleChangeComment}>
            Bad
          </BadButton>
        </ButtonGroup>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <Statistic>Good:{good}</Statistic>
        <Statistic>Neutral: {neutral}</Statistic>
        <Statistic>Bad: {bad}</Statistic>
        <Statistic>Total: {total}</Statistic>
        <Statistic>Positive feedback: {percentage}%</Statistic>
      </Container>
    );
  }
}
