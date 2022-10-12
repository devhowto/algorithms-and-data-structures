//
// tags: recursion list filter
//

import {
  isOdd,
  isEmpty,
  head,
  tail,
  append,
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
  return filterOdds(
    tail(xs),
    isOdd(head(xs)) ? append(head(xs), acc) : acc
  );
}

export { filterOdds };
