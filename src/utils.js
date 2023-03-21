const getRandomNumber = (min = 1, max = 100) => {
  const number = Math.round(Math.random() * max);
  return number >= min ? number : getRandomNumber(min, max);
};
export default getRandomNumber;
