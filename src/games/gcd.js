import setTheGame from '../index.js';
import { getRandomNumber, getCommonDivider } from '../utils.js';

const middleSizeOfNumber = 100;

const check = (number1, number2) => {
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
const setGameRound = () => {
  const number1 = getRandomNumber(middleSizeOfNumber);
  const number2 = getRandomNumber(middleSizeOfNumber);
  const question = ` ${number1} ${number2}`;
  const expectedAnswer = check(number1, number2).toString();
  return [question, expectedAnswer];
};

export default () => setTheGame(introduction, setGameRound);
