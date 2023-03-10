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
  const question = `${number}`;
  const expectedAnswer = checkIfNumIsEven(number);
  return [question, expectedAnswer];
};

export default () => setTheGame(introduction, setGameRound);
