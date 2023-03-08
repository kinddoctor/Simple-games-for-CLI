import readlineSync from 'readline-sync';

export default (intro, setGameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(intro);
  const maxAmountOfGameRounds = 3;
  for (let i = 1; i <= maxAmountOfGameRounds; i += 1) {
    const game = setGameRound();
    if (game === 'Correct!') {
      console.log(game);
    } else {
      console.log(game);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
