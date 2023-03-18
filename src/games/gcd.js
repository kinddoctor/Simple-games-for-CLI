import setTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const middleSizeOfNumber = 100;

const getCommonDivider = (a, b) => {
  if (!b) {
    return a;
  }
  return getCommonDivider(b, a % b);
};

const calculateCorrectAnswer = (number1, number2) => {
  const nums = {};
  if (number1 > number2) {
    nums.big = number1;
    nums.small = number2;
  } else {
    nums.big = number2;
    nums.small = number1;
  }
  return getCommonDivider(nums.big, nums.small);
};

const introduction = 'Find the greatest common divisor of given numbers.';
const generateGameRound = () => {
  const number1 = getRandomNumber(middleSizeOfNumber);
  const number2 = getRandomNumber(middleSizeOfNumber);
  const question = `${number1} ${number2}`;
  const expectedAnswer = calculateCorrectAnswer(number1, number2).toString();
  return [question, expectedAnswer];
};

export default () => setTheGame(introduction, generateGameRound);
