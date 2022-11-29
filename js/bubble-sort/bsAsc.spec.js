import { bsAsc } from './bsAsc-v2.js';

describe('bsAsc()', () => {
  test('empty arrays', () => {
    expect(bsAsc([])).toEqual([]);
  });

  test('single-element arrays', () => {
    expect(bsAsc([-3])).toEqual([-3]);
  });

  test('two-element arrays', () => {
    expect(bsAsc([1, 2])).toEqual([1, 2]);
    expect(bsAsc([2, 1])).toEqual([1, 2]);
  });

  test('three-or-more-element arrays', () => {
    expect(bsAsc([3, 5, 7])).toEqual([3, 5, 7]);
    expect(bsAsc([5, 3, 7])).toEqual([3, 5, 7]);
  });
});
