import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const calculateCorrectAnswer = (arrayOfNums, placeOfTheGap, stepOfProgression) => {
  const previousNumberIndex = placeOfTheGap - 1;
  return arrayOfNums[previousNumberIndex] + stepOfProgression;
};

const getTheProgression = () => {
  const arrayOfNums = [];
  const number1 = getRandomNumber(10, 100);
  const stepOfProgression = getRandomNumber(10, 100);
  arrayOfNums.push(number1);
  for (let i = 1; i < 10; i += 1) {
    arrayOfNums[i] = arrayOfNums[i - 1] + stepOfProgression;
  }
  const placeOfTheGap = getRandomNumber(1, 10);
  arrayOfNums[placeOfTheGap] = '..';
  const progression = arrayOfNums.join(' ');
  return [arrayOfNums, placeOfTheGap, stepOfProgression, progression];
};

const introduction = 'What number is missing in the progression?';

const generateGameRound = () => {
  const [arrayOfNums, placeOfTheGap, stepOfProgression, progression] = getTheProgression();
  const question = `${progression}`;
  const correctAnswer = calculateCorrectAnswer(arrayOfNums, placeOfTheGap, stepOfProgression);
  const expectedAnswer = correctAnswer.toString();
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateGameRound);
