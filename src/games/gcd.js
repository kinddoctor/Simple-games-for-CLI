import readlineSync from 'readline-sync';
import processOfGame from '../index.js';
import { randomNumber, gcd } from '../utils.js';

const check = (number1, number2) => {
  const nums = {};
  if (number1 > number2) {
    nums.big = number1;
    nums.small = number2;
  } else {
    nums.big = number2;
    nums.small = number1;
  }
  return gcd(nums.big, nums.small);
};

const introduction = 'Find the greatest common divisor of given numbers.';
const gameRound = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${number1} ${number2}\nYou answer: `);
  const expectedAnswer = check(number1, number2).toString();
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export default () => processOfGame(introduction, gameRound);
