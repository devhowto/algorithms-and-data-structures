//
// tags: recursion fp some
//

import {
  head,
  tail,
  isEmpty,
} from "/src/tslib/index.ts";

/**
 * Checks whether at least one element in the array satisfies the
 * predicate.
 *
 * - T.C: O(n)
 * - S.C: O(1)
 *
 * @sig [a] (a -> Boolean) -> Boolean
 */
export function some<T>(
  xs: T[],
  fn: (e: T) => boolean,
): boolean {
  if (isEmpty(xs)) return false;

  return fn(head(xs))
    ? true
    : some(tail(xs), fn);
}
