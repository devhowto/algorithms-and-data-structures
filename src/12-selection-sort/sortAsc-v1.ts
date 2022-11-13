//
// tags: algorithm sort selection-sort
//

/**
 * Swaps the elements at `idx1` and `idx2`.
 *
 * NOTE: This function is impure. It mutates the passed array.
 *
 * @sig [a] Int Int -> [a]
 */
function swap(
  xs: number[],
  idx1: number,
  idx2: number,
): void {
  [xs[idx1], xs[idx2]] = [xs[idx2], xs[idx1]];
}

/**
 * Sorts an array in ascending order using the selection sort algorithm.
 *
 * This solution is OK as it keeps iterating on an ever shrinking
 * portion of the input, so, it does not do unnecessary work (as far as
 * selection sort goes).
 *
 * - T.C: O(n²).
 * - S.C: O(1).
 *
 * @sig [Number] -> [Number]
 */

export function sortAsc(xs: number[]): number[] {
  const len = xs.length;

  for (let i = 0; i < len; ++i) {
    let min = i;

    for (let j = i + 1; j < len; ++j) {
      if (xs[j] < xs[min])
        min = j;
    }

    if (xs[min] < xs[i])
      swap(xs, i, min);
  }

  return xs;
}
