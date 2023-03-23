import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const getOperator = () => {
  const operators = ['-', '+', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[operatorIndex];
};

const calculateCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown kind of operator: '${operator}'!`);
  }
};

const introduction = 'What is the result of the expression?';

const generateGameRound = () => {
  const number1 = getRandomNumber(10, 100);
  const number2 = getRandomNumber(10, 100);
  const operator = getOperator(number1);

  const question = `${number1} ${operator} ${number2}`;
  const expectedAnswer = calculateCorrectAnswer(number1, number2, operator).toString();
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateGameRound);
