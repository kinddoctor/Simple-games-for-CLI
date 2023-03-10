import setTheGame from '../index.js';
import { getRandomNumber, isPrime } from '../utils.js';

const middleSizeOfNumber = 100;

const checkIfNumIsPrime = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const setGameRound = () => {
  const number = getRandomNumber(middleSizeOfNumber);
  const question = `${number}`;
  const expectedAnswer = checkIfNumIsPrime(number);
  return [question, expectedAnswer];
};

export default () => setTheGame(introduction, setGameRound);
