import { ssAsc } from './ssAsc-v1.js';

describe('ssAsc()', () => {
  test('empty arrays', () => {
    expect(ssAsc([])).toEqual([]);
  });

  test('single-element arrays', () => {
    expect(ssAsc([-3])).toEqual([-3]);
  });

  test('two-element arrays', () => {
    expect(ssAsc([1, 2])).toEqual([1, 2]);
    expect(ssAsc([2, 1])).toEqual([1, 2]);
  });

  test('three-or-more-element arrays', () => {
    expect(ssAsc([3, 5, 7])).toEqual([3, 5, 7]);
    expect(ssAsc([5, 3, 7])).toEqual([3, 5, 7]);
  });
});
