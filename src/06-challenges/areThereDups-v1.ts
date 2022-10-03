//
// tags: search frequency-counter loop
//

/**
 * Checks if there are any duplicate values among the arguments.
 *
 * Solution using the “frequency counter” approach.
 *
 * - Time complexity: `O(n)`.
 * - Space complexity: `O(n)`.
 *
 * @sig Number... -> Boolean
 */
function areThereDups(...args: number[]): boolean {
  if (args.length === 0) return false;

  const freqs: { [key: number]: number } = {};

  for (let val of args) {
    if (freqs[val]) return true;
    freqs[val] = 1;
  }

  return false;
}

export { areThereDups };
