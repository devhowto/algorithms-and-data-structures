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
function filterOdds(xs: number[]): number[] {
  const odds: number[] = [];

  (function go(nums: number[]): void {
    if (isEmpty(nums)) return;
    if (isOdd(head(nums))) {
      odds.push(head(nums));
      go(tail(nums));
    }
  })(xs);

  return odds;
}

export { filterOdds };
