import React from 'react';
import { Container, Title } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';

import { Statistics } from './Statistics';

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
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleChangeComment}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        />
      </Container>
    );
  }
}
