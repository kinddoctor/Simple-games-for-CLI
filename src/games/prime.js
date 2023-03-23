import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const checkIfNumIsPrime = (number) => (isPrime(number) ? 'yes' : 'no');

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRoundData = () => {
  const number = getRandomNumber(10, 100);
  const question = `${number}`;
  const expectedAnswer = checkIfNumIsPrime(number);
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateRoundData);
