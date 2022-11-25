import { rsAsc } from './rsAsc-v1.js';

describe('test description', () => {
  test('empty array', () => {
    expect(rsAsc([])).toEqual([]);
  });

  test('single-element arrays', () => {
    expect(rsAsc([7])).toEqual([7]);
    expect(rsAsc([-14])).toEqual([-14]);
  });

  test.only('two-or-more-element arrays', () => {
    expect(
      rsAsc([25, 792, 503, 594, 0, 1001, 101])
    ).toEqual([0, 25, 101, 503,  594, 792, 1001]);
  });
});
