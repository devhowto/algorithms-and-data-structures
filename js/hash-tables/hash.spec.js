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

  describe('get(key)', () => {
    test('search for non-existing key', () => {
      var h = new Hash();
      expect(h.get('darkblue')).toBe(undefined);
    });

    test('search for existing key', () => {
      //
      // Using 51 as both 'darkblue' and 'salmon' keys will
      // collide at index 20.
      //
      var h = new Hash(51);

      h.set('darkblue', '#111192');
      // var idxSalmon = h.set('salmon', '#fa8072');

      expect(h.get('darkblue')).toEqual('#111192');
    });

    test('search for non-existing key', () => {
      //
      // Using 51 as both 'darkblue' and 'salmon' keys will
      // collide at index 20.
      //
      var h = new Hash(51);

      h.set('darkblue', '#111192');
      // var idxSalmon = h.set('salmon', '#fa8072');

      //
      // But now try to get 'salmon', which should also be on index
      // 20, except this is not there.
      //
      expect(h.get('salmon')).toBe(undefined);
    });
  });

  describe('keys()', () => {
    test('a hash with no data yet', () => {
      var h = new Hash();
      expect(h.keys()).toEqual([]);
    });

    test('a hash with no colliding indexes', () => {
      var h = new Hash(53);

      h.set('red', '#ff0000');
      h.set('green', '#00ff00');
      h.set('blue', '#0000ff');

      //
      // The expect array order is different because of they
      // key indices for each color when adding to the hash table.
      //
      expect(h.keys()).toEqual(['green', 'blue', 'red']);
    });

    test('a hash with coliding indexes', () => {
      //
      // Using 51 as both 'darkblue' and 'salmon' keys will
      // collide at index 20.
      //
      var h = new Hash(51);

      h.set('red', '#ff0000');
      h.set('green', '#00ff00');
      h.set('blue', '#0000ff');
      h.set('darkblue', '#111192');
      h.set('salmon', '#fa8072');

      expect(h.keys()).toEqual([
        'blue',
        'red',
        'darkblue',
        'salmon',
        'green',
      ]);
    });
  });
});
