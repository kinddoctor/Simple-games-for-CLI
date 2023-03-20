import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const middleSizeOfNumber = 100;

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const checkIfNumIsPrime = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateGameRound = () => {
  const number = getRandomNumber(middleSizeOfNumber);
  const question = `${number}`;
  const expectedAnswer = checkIfNumIsPrime(number);
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateGameRound);
