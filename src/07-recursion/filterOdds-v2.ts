//
// tags: recursion list filter
//

import {
  isOdd,
  isEmpty,
  head,
  tail,
} from "/src/tslib/index.ts";

/**
 * Returns only the odd numbers from xs.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(n)`.
 *
 * @sig [Number] -> [Number]
 */
function filterOdds(
  xs: number[],
  acc: number[] = [],
): number[] {
  if (isEmpty(xs)) return acc;
  if (isOdd(head(xs))) acc.push(head(xs));
  return filterOdds(tail(xs), acc);
}

export { filterOdds };
