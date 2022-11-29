/**
 * Returns the maximum sum of `len` consecutive elements in `xs` or
 * `undefined` if impossible to find the sum.
 *
 * Make sure `xs.length >= len`
 *
 * - Time complexity: `O(n²)`.
 * - Space complexity: `O(1)`.
 *
 * @sig [Number] Number -> Number | Undefined
 */
function maxSubArrSum(xs: number[], len: number): number | undefined {
  if (xs.length === 0 || xs.length < len) return undefined;

  let maxSumFound = -Infinity;

  //                             <1>
  for (let i = 0; i <= xs.length - len; ++i) {
    let tempSum = 0;

    for (let j = 0; j < len; ++j) {
      tempSum += xs[i + j];
    }

    maxSumFound = Math.max(maxSumFound, tempSum);
  }

  return maxSumFound;
}

export { maxSubArrSum };
