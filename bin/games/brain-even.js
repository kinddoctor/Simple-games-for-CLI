#!/usr/bin/env node

import processOfGame from '../src/index.js';

const check = number => (number % 2 === 0 ? 'yes' : 'no');
const introduction = console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameRound = () => {
  const number = Math.round(Math.random() * 100);
  const userAnswer = readlineSync.question(`Question: ${number}\nYou answer:`);
  return toNumber(`${userAnswer}`);
};

processOfGame();
