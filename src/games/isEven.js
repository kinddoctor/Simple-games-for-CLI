import readlineSync from 'readline-sync';
import processOfGame from '../index.js';
import { bigRandomNumber, isEven } from '../utils.js';

const checkIfNumIsEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRound = () => {
  const number = bigRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${number}\nYou answer:`);
  const expectedAnswer = checkIfNumIsEven(number);
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export default () => processOfGame(introduction, gameRound);
