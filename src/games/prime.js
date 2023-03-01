import readlineSync from 'readline-sync';
import processOfGame from '../index.js';
import { randomNumber, isPrime } from '../utils.js';

const checkIfNumIsPrime = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameRound = () => {
  const number = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${number}\nYou answer: `);
  const expectedAnswer = checkIfNumIsPrime(number);
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export default () => processOfGame(introduction, gameRound);
