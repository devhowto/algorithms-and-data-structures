//
// tags: recursion math
//

import {
  isEmpty,
  head,
  tail,
} from "/src/tslib/index.ts";

/**
 * Computes the product of `xs`.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(1)`.
 *
 * @sig [Number] -> Number
 */
export function product(xs: number[]): number {
  return isEmpty(xs)
    ? 1
    : 1 * head(xs) * product(tail(xs));
}

