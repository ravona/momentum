export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getRandomArrayItem = (array) => {
  let randomNum = getRandomInt(array.length);
  let RandomArrayItem = array[randomNum];
  return RandomArrayItem;
};
