import { length } from './';

describe('length()', () => {
  test('empty arrays', () => {
    expect(length([])).toEqual(0);
  });

  test('non-empty arrays', () => {
    expect(length([1])).toEqual(1);
    expect(length(Array(1e5))).toEqual(100_000);
  });
});
