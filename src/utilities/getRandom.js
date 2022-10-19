const getRandomIndex = (arr) => {
  if (!Array.isArray(arr)) return;
  const length = arr.length;
  const index = Math.floor(Math.random() * length);
  return index;
};

export default getRandomIndex;
