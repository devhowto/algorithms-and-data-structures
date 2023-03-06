import {
  Hash,
  HASH_DEFAULT_SIZE,
} from './hash.js';

describe('Hash', () => {
  test(`can construct a hash with default size ${HASH_DEFAULT_SIZE}`, () => {
    var h = new Hash();
    expect(h.keyMap.length).toEqual(HASH_DEFAULT_SIZE);
  });

  test('can construct a hash with custom size 31', () => {
    var h = new Hash(31);
    expect(h.keyMap.length).toEqual(31);
  });

  describe('set(key, val)', () => {
    test('insert to empty slot', () => {
      var h = new Hash(51);

      var idx = h.set('darkblue', '#111192');

      expect(idx).toBe(20);

      expect(h.keyMap[20]).toEqual([
        ['darkblue', '#111192'],
      ]);
    });

    test('insert to slot with collision', () => {
      //
      // Using 51 as both 'darkblue' and 'salmon' keys will
      // collide at index 20.
      //
      var h = new Hash(51);

      var idxDarkBlue = h.set('darkblue', '#111192');
      var idxSalmon = h.set('salmon', '#fa8072');

      expect(idxDarkBlue).toBe(20);
      expect(idxSalmon).toBe(20);

      expect(h.keyMap[20]).toEqual([
        ['darkblue', '#111192'],
        ['salmon', '#fa8072'],
      ]);
    });
  });


});
