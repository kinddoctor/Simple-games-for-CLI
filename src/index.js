import readlineSync from 'readline-sync';

export default (intro, setGameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(intro);
  const maxAmountOfGameRounds = 3;
  for (let i = 1; i <= maxAmountOfGameRounds; i += 1) {
    const [question, expectedAnswer] = setGameRound();
    const userAnswer = readlineSync.question(`Question: ${question}\nYou answer:`);
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
