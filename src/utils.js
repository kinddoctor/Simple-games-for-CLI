

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
