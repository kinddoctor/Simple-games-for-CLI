import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const getDataForProgression = () => {
  const nums = [];
  const lengthOfProgression = 10;
  const number1 = getRandomNumber();
  const stepOfProgression = getRandomNumber();
  nums.push(number1);
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    nums[i] = nums[i - 1] + stepOfProgression;
  }
  const indexOfTheGap = getRandomNumber(0, lengthOfProgression - 1);
  const gap = '..';
  return [nums, indexOfTheGap, gap];
};

const introduction = 'What number is missing in the progression?';

const generateRoundData = () => {
  const [nums, indexOfTheGap, gap] = getDataForProgression();
  const correctAnswer = nums[indexOfTheGap];
  const expectedAnswer = correctAnswer.toString();

  nums[indexOfTheGap] = gap;
  const progression = nums.join(' ');
  const question = `${progression}`;
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateRoundData);
