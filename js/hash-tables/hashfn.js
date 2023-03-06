/**
 * A prime number that will make our indexes less clustered.
 *
 * See:
 *
 * https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why
 */
var PRIME = 31;

/**
 * A hash function for strings that always returns an integer between 0
 * and `len - 1` which can be used to to index our hash keys using an
 * array of tuples.
 *
 * NOTE: This is a very simplified solution for our hash table
 * simplistic implementation.
 *
 * NOTE: To make this function constant time, we take at most the 25
 * first characters of the key to compute the index.
 *
 * ASSUME: Input is a lowercase, ascii-only string.
 *
 * Instead of getting the modulo only at the end, we decided to
 * take the module at each step for each char.
 *
 * - T.C: O(1). The longer the string key, the longer it takes to find
 *   the index.
 *
 * @sig String -> Int -> Int
 */
function hash(str, len) {
  var idx = 0,
      max = Math.min(25, str.length),
      i,
      chr;

  for (i = 0; i < max; ++i) {
    var sub = str[i].charCodeAt(0) - 96;
    idx = (idx * PRIME + sub) % len;
  }

  return idx;
}

export { hash };
