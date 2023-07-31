import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 100px;
  background-color: #ffffff;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  width: 100px;
`;

export const GoodButton = styled(Button)`
  background-color: #63b79b;
`;

export const NeutralButton = styled(Button)`
  background-color: #f1c40f;
`;

export const BadButton = styled(Button)`
  background-color: #e74c3c;
`;

export const StatisticsTitle = styled.h2`
  font-size: 20px;
  color: #333333;
  margin: 30px 0 10px;
`;

export const Statistic = styled.p`
  font-size: 18px;
  color: #333333;
  margin: 5px 0;
`;
