import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

export const gameIsEven = () => {
  for (let i = 1, i < 4, i += 1) {
    const number = Math.random() * 100;
    const readlineSync = require('readline-sync');
    const userAnswer = readlineSync.question(`Question: ${number}`);
    const expectedAnswer = isEven(number);
    if (expectedAnswer === userAnswer ) {
      console.log('Correct!');
      break;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log('Congratulations, ${userName}!');
};
