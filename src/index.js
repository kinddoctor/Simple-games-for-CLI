import readlineSync from 'readline-sync';

export default (intro, generateGameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(intro);
  const maxAmountOfGameRounds = 3;
  for (let i = 1; i <= maxAmountOfGameRounds; i += 1) {
    const [question, expectedAnswer] = generateGameRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
