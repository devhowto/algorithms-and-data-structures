import { fib } from './fib-v3.js';

describe('fib(n)', () => {
  test('1st term is 1 (base case)', () => {
    expect(fib(1)).toEqual(1);
  });

  test('2nd term is 1 (also base case)', () => {
    expect(fib(2)).toEqual(1);
  });

  test('3rd term is 2', () => {
    expect(fib(3)).toEqual(2);
  });

  test('4th term is 3', () => {
    expect(fib(4)).toEqual(3);
  });

  // 1 1 2 3 5
  test('5th term is 5', () => {
    expect(fib(5)).toEqual(5);
  });

  // 1 1 2 3 5 8
  test('6th term is 8', () => {
    expect(fib(6)).toEqual(8);
  });

  // 1 1 2 3 5 8 13
  test('7th term is 13', () => {
    expect(fib(7)).toEqual(13);
  });
});
