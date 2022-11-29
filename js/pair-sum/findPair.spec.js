import { findPair } from './findPair-v3.js';

describe('findPair()', () => {
  test('empty array', () => {
    expect(findPair([], 8)).toEqual(undefined);
  });

  test('single-element array', () => {
    expect(findPair([7], 8)).toEqual(undefined);
  });

  test('two-or-more-element array', () => {
    expect(findPair([2, 5], 8)).toEqual(undefined);
    expect(findPair([2, 6], 8)).toEqual([2, 6]);
  });

  test('three-ore-more-element array', () => {
    expect(findPair([1, 2, 3, 9], 8)).toEqual(undefined);
    expect(findPair([1, 2, 4, 4], 8)).toEqual([4, 4]);
    expect(findPair([1, 2, 3, 5, 6, 6], 8)).toEqual([2, 6]);
    expect(findPair([2, 3, 3, 4, 6], 8)).toEqual([2, 6]);
    expect(findPair([1, 3, 3, 4, 5, 6], 8)).toEqual([3, 5]);
  });
});
