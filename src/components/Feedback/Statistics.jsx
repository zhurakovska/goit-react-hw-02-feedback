import React from 'react';
import PropTypes from 'prop-types';

import { Notification } from './Notification';

import { StatisticsTitle, Statistic } from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
