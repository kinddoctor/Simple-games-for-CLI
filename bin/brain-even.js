#!/usr/bin/env node

import { greeting, gameIsEven } from '../src/even-Game.js';

console.log('Welcome to the Brain Games!');
const userName = greeting();
console.log('Hello, ${userName}!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const game = gameIsEven();


