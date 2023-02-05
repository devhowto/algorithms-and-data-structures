const log = console.log.bind(console);

/**
 * A hash function for strings that always returns an integer
 * between 0 and `len - 1` (if we want to implement our
 * hash tables using an array of 10 positions, we get indices
 * from 0 to 9).
 *
 * NOTE: This is a very simplified solution for our hash table
 * simplistic implementation.
 *
 * ASSUME: Input is a lowercase, ascii-only string.
 *
 * Instead of getting the modulo only at the end, we decided to
 * take the module at each step for each char.
 *
 * - T.C: O(n).
 *
 * @sig String -> Int -> Int
 */
function hash(str, len) {
  return [...str].reduce((acc, chr) => {
    var sub = chr.charCodeAt(0) - 96;
    return (acc * 31 + sub) % len;
  }, 0);
}

export { hash };
