/**
 * Returns the index of `x` or -1 if not found.
 *
 * Uses binary search algorithm.
 *
 * Time complexity: log₂(n).
 * Space complexity: O(1).
 *
 * @sig [Number] Number -> Number
 */
function searchNum(xs: number[], x: number): number {
  let min = 0,
      max = xs.length - 1;

  while (min <= max) {
    const idx = Math.floor((min + max) / 2);

    if (xs[idx] < x) min = idx + 1;
    else if (xs[idx] > x) max = idx - 1;
    else return idx;
  }

  return -1;
}

export { searchNum };
