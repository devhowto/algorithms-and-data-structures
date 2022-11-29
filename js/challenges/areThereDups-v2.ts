//
// tags: search multiple-pointers loop
//

/**
 * Checks if there are any duplicate values among the arguments.
 *
 * Solution using the “multiple pointers” approach.
 *
 * - Space complexity: `O(n)`.
 * - Time complexity: `O(1)`.
 *
 * @sig Number... -> Boolean
 */
function areThereDups(...args: number[]): boolean {
  if (args.length === 0) return false;

  let l = 0,
      r = args.length - 1;

  while (l < r) {
    if (args[l++] === args[r]) {
      return true;
    }
  }

  return false;
}

export { areThereDups };
