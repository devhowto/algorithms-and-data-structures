/**
 * Returns the maximum sum of `len` consecutive elements in `xs` or
 * `undefined` if impossible to find the sum.
 *
 * Make sure `xs.length >= len`
 *
 * - Time complexity: `O(n)`.
 * - Space complexity: `O(1)`.
 *
 * @sig [Number] Number -> Number | Undefined
 */
function maxSubArrSum(xs: number[], len: number): number | undefined {
  if (xs.length === 0 || xs.length < len) return undefined;

  let maxSoFar = -Infinity; // <1>
  let i, windowSum;

  maxSoFar = xs.slice(0, len).reduce((acc, num) => acc + num, 0);
  windowSum = maxSoFar;

  for (i = len; i < xs.length; ++i) {
    windowSum = windowSum - xs[i - len] + xs[i];
    maxSoFar = Math.max(windowSum, maxSoFar);
  }

  return maxSoFar;
}

export { maxSubArrSum };
