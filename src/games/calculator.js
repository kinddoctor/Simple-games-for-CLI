import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const smallSizeOfNumber = 10;
const middleSizeOfNumber = 100;

const getOperator = () => {
  const arrayOfOperators = ['-', '+', '*'];
  const placeOfOperator = getRandomNumber(smallSizeOfNumber);
  if (placeOfOperator > 2) {
    return getOperator();
  }
  return arrayOfOperators[placeOfOperator];
};

const calculateCorrectAnswer = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Unknown kind of operator: '${operator}'!`);
  }
  return result;
};

const introduction = 'What is the result of the expression?';

const generateGameRound = () => {
  const number1 = getRandomNumber(middleSizeOfNumber);
  const number2 = getRandomNumber(middleSizeOfNumber);
  const operator = getOperator(number1);

  const question = `${number1} ${operator} ${number2}`;
  const expectedAnswer = calculateCorrectAnswer(number1, number2, operator).toString();
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateGameRound);
