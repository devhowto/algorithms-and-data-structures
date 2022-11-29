//
// tags: recursion list filter
//

import {
  isEmpty,
  isOdd,
  head,
  tail,
  concat,
} from "/src/tslib/index.ts";

/**
 * Returns only the odd numbers from xs.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(n)`.
 *
 * @sig [Number] -> [Number]
 */
function filterOdds(xs: number[]): number[] {
  const arr: number[] = [];

  if (isEmpty(xs)) return arr;

  if (isOdd(head(xs))) arr.push(head(xs));

  return concat(arr, filterOdds(tail(xs)));
}

export { filterOdds };
