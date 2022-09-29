/**
 * Returns the maximum sum of `len` consecutive elements in `xs` or
 * `undefined` if impossible to find the sum.
 *
 * Make sure `xs.length >= len`
 *
 * @sig [Number] -> Number -> Number | Undefined
 */
function maxSubArrSum(xs: number[], len: number): number | undefined {
  if (xs.length === 0 || xs.length < len) return undefined;

  let maxSoFar = -Infinity; // <1>
  let i, slidingWindowSum;

  maxSoFar = xs.slice(0, len).reduce((acc, num) => acc + num, 0);
  slidingWindowSum = maxSoFar;

  for (i = len; i < xs.length; ++i) {
    slidingWindowSum = slidingWindowSum - xs[i - len] + xs[i];
    maxSoFar = Math.max(slidingWindowSum, maxSoFar);
  }

  return maxSoFar;
}

export { maxSubArrSum };
