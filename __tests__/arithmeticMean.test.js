const { arithmeticMean } = require('../src/arithmeticMean');

it('should return zero when passed empty array as input', () => {
    const result = arithmeticMean([]);
    expect(result).toBe(0);
});

it('should return zero when passed undefined as input', () => {
    const result = arithmeticMean();
    expect(result).toBe(0);
});

it('should return same number when passed array of same numbers', () => {
    const result = arithmeticMean([3, 3, 3, 3, 3]);
    expect(result).toBe(3);
});
