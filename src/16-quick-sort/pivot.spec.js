import { pivot } from './pivot-v1';

describe('pivot()', () => {
  test('empty array', () => {
    var xs = [];
    var idx = pivot(xs);

    expect(idx).toEqual(-1);
    expect(xs).toEqual([]);
  });

  test('single-element array', () => {
    var xs = [7];
    var idx = pivot(xs);

    expect(idx).toEqual(0);
    expect(xs).toEqual([7]);
  });

  test('two-element array', () => {
    var xs = [9, 4];
    var idx = pivot(xs);

    expect(idx).toEqual(1);
    expect(xs).toEqual([4, 9]);
  });

  test('many elements', () => {
    var xs = [4, 8, 2, 1, 5, 7, 6, 3];
    var idx = pivot(xs);

    expect(idx).toEqual(3);
    console.log(xs);
    expect(xs).toEqual([3, 2, 1, 4, 5, 7, 6, 8]);
  });
});
