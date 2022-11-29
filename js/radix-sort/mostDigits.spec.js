import { mostDigits } from './mostDigits.js';

describe('mostDigits()', () => {
  test('empty array', () => {
    expect(mostDigits([])).toEqual(0);
  });

  test('single digit numbers', () => {
    expect(mostDigits([0])).toEqual(1);
    expect(mostDigits([5, 0, -7])).toEqual(1);
  });

  test('two-or-more-digit numbers', () => {
    expect(
      mostDigits([47, 1975, 1, 9791, -1001, -3])
    ).toEqual(4);
  });
});
