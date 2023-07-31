import React from 'react';

import { Notification } from './Notification';

import { StatisticsTitle, Statistic } from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (!total) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <Statistic>Good:{good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {total}</Statistic>
      <Statistic>Positive feedback: {positivePercentage}%</Statistic>
    </>
  );
};
