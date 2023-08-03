import React from 'react';
import { Container } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

import { Statistics } from './Statistics';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    const options = ['Good', 'Neutral', 'Bad'];

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleChangeComment}
          />
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
