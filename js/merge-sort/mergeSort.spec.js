import { sortAsc } from'./mergeSort-v2';

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
