//
// tags: recursion sum range
//

/**
 * Sum all integers from 1 to x, inclusive.
 *
 * ASSUME: `x >= 1`.
 *
 * - T.C: `O(1)`.
 * - S.C: `O(1)`.
 *
 * @sig Number -> Number
 */
function sumRange(x: number): number {
  return x * (x + 1) / 2;
}

export { sumRange };
