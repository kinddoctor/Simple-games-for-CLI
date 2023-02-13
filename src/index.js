import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(introduction());
  for (let i = 1; i <= 3; i += 1) {
    const userAnswer = gameRound();
    const expectedAnswer = check();
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
      break;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
