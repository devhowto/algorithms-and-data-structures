import { hash } from './hashfn.js';

/**
 * We want the size to be a prime number is it helps to reduce the
 * occurrence of collisions.
 */
var HASH_DEFAULT_SIZE = 53;

class Hash {
  constructor(size = HASH_DEFAULT_SIZE) {
    this.keyMap = new Array(size);
  }

  #hash(key) {
    return hash(key, this.keyMap.length);
  }

  set(key, val) {
    var idx = this.#hash(key);

    if (this.keyMap[idx] === undefined)
      this.keyMap[idx] = [];

    this.keyMap[idx].push([key, val]);

    return idx;
  }

  get(key) {
    var idx = this.#hash(key);
    var arr = this.keyMap[idx];
    var tup;

    if (arr === undefined) return undefined;

    tup = arr.find(([k]) => k === key);

    return tup && tup[1];
  }

  keys() {
    var i,
        j,
        tup,
        keys = [];

    //
    // As our hash uses Array, which is a sparse data structure
    // in ECMAScript, we have to be careful with empty slots. See:
    //
    // • https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots
    //
    for (i = 0; i < this.keyMap.length; ++i) {
      tup = this.keyMap[i];

      if (tup === undefined) continue;

      for (j = 0; j < tup.length; ++j)
        keys.push(tup[j][0]);
    }

    return keys;
  }

  /**
   * Gets the values present in the hash.
   *
   * By default, duplicate values are NOT included in the resulting
   * array. If they are to be kept, pass `true` for the `dups`
   * parameter.
   *
   * The order of the resulting array is not the same as the order
   * in which the key/values are added to the hash table.
   *
   * @param {boolean} [dups=false]
   * @returns {Array<unknown>}
   */
  values(noDups = true) {
    var i,
        j,
        tup,
        val,
        vals = [];

    for (i = 0; i < this.keyMap.length; ++i) {
      tup = this.keyMap[i];

      if (tup === undefined) continue;

      for (j = 0; j < tup.length; ++j) {
        val = tup[j][1];

        if (noDups && vals.indexOf(val) !== -1) continue;

        vals.push(val);
      }
    }

    return vals;
  }
}

export {
  Hash,
  HASH_DEFAULT_SIZE,
};
