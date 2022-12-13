import {
  findMaxHeight,
} from './birthday-cake-candles-v2.js';

describe('findMaxHeight(candles)', () => {
  describe('single-element array', () => {
    test('should find 3 one time', () => {
      expect(findMaxHeight([3])).toEqual(1);
    });
  });

  describe('array with no repeated numbers', () => {
    test('should find 5 one time', () => {
      expect(findMaxHeight([5, 3])).toEqual(1);
    });

    test('should find 7 three times', () => {
      expect(findMaxHeight([7, 3, 5, 1, 7, 7, 2])).toEqual(3);
    });
  });
});
