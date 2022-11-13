const { merge } = require('./mergeSort-v1');

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
