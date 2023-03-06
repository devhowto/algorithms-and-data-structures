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
}

export {
  Hash,
  HASH_DEFAULT_SIZE,
};
