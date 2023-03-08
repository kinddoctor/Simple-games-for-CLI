import readlineSync from 'readline-sync';
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
  const userAnswer = readlineSync.question(`Question: ${number}\nYou answer: `);
  const expectedAnswer = checkIfNumIsPrime(number);
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export default () => setTheGame(introduction, setGameRound);
