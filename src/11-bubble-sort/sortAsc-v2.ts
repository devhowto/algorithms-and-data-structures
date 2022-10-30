//
// tags: algorithm sort bubble-sort
//

import {
  log,
} from "/src/tslib/index.ts";

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
 * This is an improved approach such a way that on each iteration, an
 * ever shrinking portion of the input array is worked upon and no
 * unnecessary comparisons are performed.
 *
 * - T.C: O(n²).
 * - S.C: O(n).
 *
 * @sig [Number] -> [Number]
 */
export function sortAsc(xs: number[]): number[] {
  const len = xs.length;

  for (let i = len - 1; i >= 0; --i) {
    for (let j = 0; j < i; ++j) {
      log(xs, xs[j], xs[j + 1]);
      if (xs[j] > xs[j + 1])
        swap(xs, j, j + 1);
    }
  }

  return xs;
}
