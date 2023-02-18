import processOfGame from '../index.js';
import { randomNumber, getOperator } from '../utils.js';
import readlineSync from 'readline-sync';

const check = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
  }
};

const introduction = 'What is the result of the expression?';

const gameRound = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const operator = getOperator(number1);

  const userAnswer = readlineSync.question(`Question: ${number1} ${operator} ${number2}\nYou answer:`);
  const expectedAnswer = check(number1, number2, operator).toString();
  if (userAnswer === expectedAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
};

export const calculationGame = processOfGame(introduction, gameRound, check);
