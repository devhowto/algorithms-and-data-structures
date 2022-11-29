import { fizzBuzz } from './fizzBuzz-v1.js';

describe('fizzBuzz()', () => {
  test('empty array of numbers', () => {
    expect(fizzBuzz([])).toEqual("");
  });

  test("fizz", () => {
    expect(fizzBuzz([3])).toEqual("fizz");
  });

  test("buzz", () => {
    expect(fizzBuzz([3])).toEqual("fizz");
  });

  test('fizz buzz', () => {
    expect(fizzBuzz([14, 15])).toEqual("fizz buzz");
  });

  test('fizz fizz buzz buzz fizz buzz', () => {
    expect(
      fizzBuzz([ 2, 3, 9, 7, 5, 10, 15, 19])
    ).toEqual("fizz fizz buzz buzz fizz buzz");
  });
});
