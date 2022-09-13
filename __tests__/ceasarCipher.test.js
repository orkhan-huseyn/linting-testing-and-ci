const { ceasarCipher } = require('../src/ceasarCipher');

it('should return ciphered text with simple example', () => {
    const result = ceasarCipher('ATTACKATONCE', 4);
    expect(result).toBe('EXXEGOEXSRGI');
});

it('should return test itself when given 0 as key', () => {
    const result = ceasarCipher('SALAM', 0);
    expect(result).toBe('SALAM');
});
