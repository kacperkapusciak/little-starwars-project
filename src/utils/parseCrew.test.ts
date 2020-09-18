import parseCrew from './parseCrew';

describe('[util] parseCrew', () => {
  it('should parse integers', () => {
    expect(parseCrew('4')).toBe(4);
  });

  it('should parse thousands with comma character', () => {
    expect(parseCrew('1,000')).toBe(1000);
  });

  it('should parse big numbers with commas', () => {
    expect(parseCrew('1,000,000')).toBe(1000000);
  });

  it('should pick largest number from range', () => {
    expect(parseCrew('10-100')).toBe(100);
  });

  it('should handle range with numbers with commas', () => {
    expect(parseCrew('1,000-12,345')).toBe(12345);
  });

  it("should return NaN when value can't be parsed", () => {
    expect(parseCrew('unknown')).toBe(NaN);
  });
});
