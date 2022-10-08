//
// tags: recursion
//

/**
 * Computes the factorial of `x`.
 *
 * ASSUME: `x >= 1`.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(1)`.
 *
 * @sig Number -> Number
 */
function fact(x: number): number {
  if (x === 0 || x === 1) return 1;
  return x * fact(x - 1);
}

export { fact };
