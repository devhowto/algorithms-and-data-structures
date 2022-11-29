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
export function product(xs: number[], acc: number = 1): number {
  return isEmpty(xs)
    ? acc
    : 1 * product(tail(xs), acc * head(xs));
}
