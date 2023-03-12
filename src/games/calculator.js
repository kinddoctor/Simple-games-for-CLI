import setTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const middleSizeOfNumber = 100;

const getOperator = (num) => {
  if (num % 3 === 0 || num % 7 === 0) {
    return '+';
  }
  return num % 2 === 0 ? '-' : '*';
};

const check = (number1, number2, operator) => {
  let operation;
  switch (operator) {
    case '+':
      operation = number1 + number2;
      break;
    case '-':
      operation = number1 - number2;
      break;
    case '*':
      operation = number1 * number2;
      break;
    default:
      operation = 0;
  }
  return operation;
};

const introduction = 'What is the result of the expression?';

const setGameRound = () => {
  const number1 = getRandomNumber(middleSizeOfNumber);
  const number2 = getRandomNumber(middleSizeOfNumber);
  const operator = getOperator(number1);

  const question = `${number1} ${operator} ${number2}`;
  const expectedAnswer = check(number1, number2, operator).toString();
  return [question, expectedAnswer];
};

export default () => setTheGame(introduction, setGameRound);
