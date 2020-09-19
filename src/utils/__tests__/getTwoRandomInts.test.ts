import { getTwoRandomInts } from '../';

describe('[util] getTwoRandomInts', () => {
  it('should throw error when value passed is below 1', () => {
    expect(() => getTwoRandomInts(0)).toThrow(RangeError);
    expect(() => getTwoRandomInts(-1)).toThrow(RangeError);
  });

  it('should return two random integers without repeats', () => {
    const [firstNum, secondNum] = getTwoRandomInts(1);
    expect(firstNum).not.toBe(secondNum);
  });
});
