import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const getCommonDivider = (a, b) => {
  if (!b) {
    return a;
  }
  return getCommonDivider(b, a % b);
};

const calculateCorrectAnswer = (number1, number2) => {
  const nums = {};
  nums.big = Math.max(number1, number2);
  nums.small = Math.min(number1, number2);
  return getCommonDivider(nums.big, nums.small);
};

const introduction = 'Find the greatest common divisor of given numbers.';
const generateGameRound = () => {
  const number1 = getRandomNumber(10, 100);
  const number2 = getRandomNumber(10, 100);
  const question = `${number1} ${number2}`;
  const expectedAnswer = calculateCorrectAnswer(number1, number2).toString();
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateGameRound);
