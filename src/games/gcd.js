import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const getCommonDivider = (a, b) => {
  if (!b) {
    return a;
  }
  return getCommonDivider(b, a % b);
};

const calculateCorrectAnswer = (number1, number2) => {
  const bigNumber = Math.max(number1, number2);
  const smallNumber = Math.min(number1, number2);
  return getCommonDivider(bigNumber, smallNumber);
};

const introduction = 'Find the greatest common divisor of given numbers.';
const generateRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const expectedAnswer = calculateCorrectAnswer(number1, number2).toString();
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateRoundData);
