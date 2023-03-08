export const getRandomNumber = (size) => Math.round(Math.random() * size);

export const isEven = (number) => number % 2 === 0;

export const getOperator = (num) => {
  if (num % 3 === 0 || num % 7 === 0) {
    return '+';
  }
  return num % 2 === 0 ? '-' : '*';
};

export const getCommonDivider = (a, b) => {
  if (!b) {
    return a;
  }
  return getCommonDivider(b, a % b);
};

export const isPrime = (num) => {
  for (let i = 2; i <= num / 3; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
