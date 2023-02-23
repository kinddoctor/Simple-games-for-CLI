import processOfGame from '../index.js';
import { randomNumber, isEven } from '../utils.js';
import readlineSync from 'readline-sync';

const check = (number) => isEven(number) ? 'yes' : 'no';
const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRound = () => {
  const number = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${number}\nYou answer:`);
  const expectedAnswer = check(number);
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export const isEvenGame = processOfGame(introduction, gameRound, check);
