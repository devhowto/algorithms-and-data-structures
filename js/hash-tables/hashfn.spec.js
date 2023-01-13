import { hash } from './hashfn.js';

describe('hash(s, l)', () => {
  test('single char', () => {
    expect(hash('a', 10)).toEqual(1);
    expect(hash('b', 10)).toEqual(2);

    expect(hash('j', 10)).toEqual(0)
    expect(hash('z', 10)).toEqual(6);
  });

  test('two chars', () => {
    expect(hash('hi', 10)).toEqual(7);
    expect(hash('no', 10)).toEqual(9);
  });

  test('some strings with same hash result', () => {
    expect(hash('pink', 10)).toEqual(0);
    expect(hash('blue', 10)).toEqual(0);
    expect(hash('orange', 10)).toEqual(0);
    expect(hash('email', 10)).toEqual(0);
  });

  test('some other strings', () => {
    expect(hash('password', 10)).toEqual(5);
    expect(hash('password_confirmation', 10)).toEqual(1);
  })
});
