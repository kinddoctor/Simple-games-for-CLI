import readlineSync from 'readline-sync';
import setTheGame from '../index.js';
import { getRandomNumber, getOperator } from '../utils.js';

const middleSizeOfNumber = 100;

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

  const userAnswer = readlineSync.question(`Question: ${number1} ${operator} ${number2}\nYou answer:`);
  const expectedAnswer = check(number1, number2, operator).toString();
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export default () => setTheGame(introduction, setGameRound);
