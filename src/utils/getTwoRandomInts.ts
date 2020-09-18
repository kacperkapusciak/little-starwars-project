const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max + 1));

// Two random integers from 0 to 'max' without repeats
const getTwoRandomInts = (max: number): [number, number] => {
  if (max <= 0) {
    throw new RangeError('max value should be bigger than 0');
  }

  const first = getRandomInt(max);
  let second = getRandomInt(max);

  while (first === second) {
    second = getRandomInt(max);
  }

  return [first, second];
};

export default getTwoRandomInts;
