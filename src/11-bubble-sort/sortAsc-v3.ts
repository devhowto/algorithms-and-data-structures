//
// tags: algorithm sort bubble-sort
//

function swap(
  xs: number[],
  idx1: number,
  idx2: number,
): void {
  [xs[idx1], xs[idx2]] = [xs[idx2], xs[idx1]];
}

/**
 * Sorts an array in ascending order using the bubble sort algorithm.
 *
 * This is a very good implementation such on each iteration, an ever
 * shrinking portion of the input array is worked upon and no
 * unnecessary comparisons are performed.
 *
 * Also, after each pass a check is performed to know if there has been
 * a swap in the previous pass. If there has not been a swap, it is
 * clear the array is sorted at this point and no further iterations are
 * necessary.
 *
 * - T.C: O(n) for best case scenario (array is already almost entirely
 *        sorted, but O(n²) if not.
 * - S.C: O(n).
 *
 * @sig [Number] -> [Number]
 */
export function sortAsc(xs: number[]): number[] {
  const len = xs.length;
  let noSwaps: boolean;

  for (let i = len - 1; i >= 0; --i) {
    noSwaps = true // <1>

    for (let j = 0; j < i; ++j) {
      if (xs[j] > xs[j + 1]) {
        swap(xs, j, j + 1);
        noSwaps = false; // <2>
      }
    }

    if (noSwaps) break; // <3>
  }

  return xs;
}
