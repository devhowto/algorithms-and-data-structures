//
// tags: search binary-search number
//

import {
  length,
  floor,
} from "/src/tslib/index.ts";

/**
 * Searches for the index of `n` in `xs`. Return the index found or -1
 * otherwise.
 *
 * This is a solution from Colt Steele using the binary search algorithm
 * for arrays.
 *
 * ASSUME: The input array is sorted. Binary search requires the input
 * array to be sorted.
 *
 * - T.C: Log₂(n).
 * - S.C: O(1).
 *
 * @sig [Number] Number -> Number
 */
export function indexOf(xs: number[], n: number): number {
  let l: number = 0;
  let r: number = length(xs) - 1;
  let m: number = floor((l + r) / 2);

  while (xs[m] !== n && l <= r) {
    if (xs[m] < n) l = m + 1;
    if (xs[m] > n) r = m - 1;

    m = floor((l + r) / 2);
  }

  return xs[m] === n ? m : -1;
}
