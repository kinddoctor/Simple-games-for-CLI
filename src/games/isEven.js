import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const checkIfNumIsEven = (number) => (isEven(number) ? 'yes' : 'no');

const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const expectedAnswer = checkIfNumIsEven(number);
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateRoundData);
