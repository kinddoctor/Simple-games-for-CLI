import readlineSync from 'readline-sync';
import processOfGame from '../index.js';
import { randomNumber, smallRandomNumber } from '../utils.js';

const check = (arrayOfNums, placeOfTheGap, stepOfProgression) => {
  const previousNumberIndex = placeOfTheGap - 1;
  return arrayOfNums[previousNumberIndex] + stepOfProgression;
};

const introduction = 'What number is missing in the progression?';

const gameRound = () => {
  const arrayOfNums = [];
  const number1 = randomNumber();
  const stepOfProgression = () => {
    const result = smallRandomNumber();
    return result > 1 ? result : result + 1;
  };
  arrayOfNums.push(number1);
  for (let i = 1; i < 10; i += 1) {
    arrayOfNums[i] = arrayOfNums[i - 1] + stepOfProgression;
  }
  const placeOfTheGap = smallRandomNumber();
  arrayOfNums[placeOfTheGap] = '..';
  const progression = arrayOfNums.join(' ');

  const userAnswer = readlineSync.question(`Question: ${progression}\nYou answer: `);
  const expectedAnswer = check(arrayOfNums, placeOfTheGap, stepOfProgression).toString();
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export default () => processOfGame(introduction, gameRound);
