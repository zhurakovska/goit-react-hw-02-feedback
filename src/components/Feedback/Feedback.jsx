import React from 'react';
import { Container } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

import { Statistics } from './Statistics';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeComment = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];
    const total = good + neutral + bad;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleChangeComment}
          />
          {total > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
          ) : (
            <Notification massege="Відгуків немає" />
          )}
        </Section>
      </Container>
    );
  }
}
