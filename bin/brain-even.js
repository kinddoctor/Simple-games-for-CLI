#!/usr/bin/env node

import greeting from '../src/cli.js';
import { gameIsEven } from '../src/even-Game.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const game = gameIsEven();


