

export const randomNumber = () => Math.round(Math.random() * 100);
export const getOperator = (num) => {
  if (num % 3 === 0 || num % 7 === 0) {
    return '+';
  }
  return num % 2 === 0 ? '-' : '*';
};
