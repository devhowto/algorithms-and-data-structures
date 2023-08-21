import { misDig } from './missdig_v1.js';

describe('misDig(expr)', () => {
  it('missing r', () => {
    expect(misDig('2 + 3 = x')).toEqual(5);
    expect(misDig('2 * 3 = x')).toEqual(6);
    expect(misDig('5 - 3 = x')).toEqual(2);
    expect(misDig('8 / 2 = x')).toEqual(4);
  });

  it('for + and * and missing a or b', () => {
    expect(misDig('2 + x = 5')).toEqual(3);
    expect(misDig('x + 3 = 5')).toEqual(2);

    expect(misDig('2 * x = 6')).toEqual(3);
    expect(misDig('x * 3 = 6')).toEqual(2);
  });

  it('for - and / and missing b', () => {
    expect(misDig('5 - x = 2')).toEqual(3);
    expect(misDig('8 / x = 4')).toEqual(2);
  });

  it('for - and / and missing a', () => {
    expect(misDig('x - 3 = 2')).toEqual(5);
    expect(misDig('x / 2 = 4')).toEqual(8);
  });
});
