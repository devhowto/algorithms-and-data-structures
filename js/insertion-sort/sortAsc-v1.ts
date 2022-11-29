//
// tags: algorithm sort insertion-sort
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
 * Sorts an array in ascending order using the insertion sort algorithm.
 *
 * - T.C: (n²).
 * - S.C: O(1).
 *
 * @sig [Number] -> [Number]
 */
export function sortAsc(xs: number[]): number[] {
  const lastPos = xs.length - 1;

  for (let i = 1; i <= lastPos; ++i) {
    for (let j = 0; j < i; ++j) {
      if (xs[i] < xs[j]) swap(xs, i, j);
    }
  }

  return xs;
}
//
// This solution keeps swapping the current element as many times as
// necessary until it falls into its proper position.
////

