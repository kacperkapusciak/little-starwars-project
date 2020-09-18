import getTwoRandomInts from './getTwoRandomInts';

describe('[util] getTwoRandomInts', () => {
  it('should throw error when value passed is below 2', () => {
    expect(() => getTwoRandomInts(1)).toThrow(RangeError);
    expect(() => getTwoRandomInts(0)).toThrow(RangeError);
    expect(() => getTwoRandomInts(-1)).toThrow(RangeError);
  });

  it('should return two random integers without repeats', () => {
    const [firstNum, secondNum] = getTwoRandomInts(2);
    expect(firstNum).not.toBe(secondNum);
  });
});
