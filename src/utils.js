export const bigRandomNumber = () => Math.round(Math.random() * 1000);

export const randomNumber = () => Math.round(Math.random() * 100);

export const smallRandomNumber = () => Math.round(Math.random() * 10);

export const isEven = (number) => number % 2 === 0;

export const getOperator = (num) => {
  if (num % 3 === 0 || num % 7 === 0) {
    return '+';
  }
  return num % 2 === 0 ? '-' : '*';
};

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const isPrime = (num) => {
  for (let i = 2; i <= num / 3; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
