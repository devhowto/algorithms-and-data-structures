const {
  merge,
  sortAsc,
} = require('./mergeSort-v1');

describe('merge()', () => {
  test('empty inputs', () => {
    expect(merge([], [])).toEqual([]);
  });

  test('one empty array', () => {
    expect(merge([1], [])).toEqual([1]);
    expect(merge([], [1])).toEqual([1]);
  });

  test('non empty arrays', () => {
    expect(merge([1, 2], [3, 4]));
    expect(
      merge([1, 3, 5], [2, 4, 6, 1e3])
    ).toEqual([1, 2, 3, 4, 5, 6, 1e3]);
  });

  test('with repeated elements in both arrays', () => {
    expect(merge([1, 2, 3], [1, 3])).toEqual([1, 1, 2, 3, 3]);
  });
});

describe('sortAsc()', () => {
  test('empty inputs', () => {
    expect(sortAsc([])).toEqual([]);
  });

  test('single element array', () => {
    expect(sortAsc([-1])).toEqual([-1]);
  });

  test('two-element arrays', () => {
    expect(sortAsc([1, 2])).toEqual([1, 2]);
    expect(sortAsc([2, 1])).toEqual([1, 2]);
    expect(sortAsc([999, -999])).toEqual([-999, 999]);
  });

  test('three-or-more-elements arrays', () => {
    expect(
      sortAsc([-1e3, -3, 1, 5, 1e6])
    ).toEqual([-1e3, -3, 1, 5, 1e6]);

    expect(
      sortAsc([1, 5, -3, -1e3, -3, 1, 5, 1e6])
    ).toEqual([-1e3, -3, -3, 1, 1, 5, 5, 1e6]);
  });
});
