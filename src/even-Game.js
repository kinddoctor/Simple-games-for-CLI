import readlineSync from 'readline-sync';
import greeting from './cli.js';

const userName = greeting();

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

export const gameIsEven = () => {
  for (let i = 1; i < 4; i += 1) {
    const number = Math.round(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${number}\nYou answer:`);
    const expectedAnswer = isEven(number);
    if (expectedAnswer === userAnswer ) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
