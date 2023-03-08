import readlineSync from 'readline-sync';
import setTheGame from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const middleSizeOfNumber = 1000;

const checkIfNumIsEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const setGameRound = () => {
  const number = getRandomNumber(middleSizeOfNumber);
  const userAnswer = readlineSync.question(`Question: ${number}\nYou answer:`);
  const expectedAnswer = checkIfNumIsEven(number);
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export default () => setTheGame(introduction, setGameRound);
