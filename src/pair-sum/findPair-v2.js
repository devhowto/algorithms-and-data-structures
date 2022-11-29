/**
 * Return a pair of `xs` whose sum is equal to `n`. Return `undefined`
 * if no such pair exists.
 *
 * - T.C: O(n).
 * - S.C: O(1).
 *
 * @sig [Int] Int -> Undefined
 * @sig [Int] Int -> [Int]
 */
function findPair(xs, n) {
  if (xs.length < 2) return undefined;
  var i = 0;
  var j = i + 1;
  var sum;

  while (i < xs.length && j < xs.length && i >= 0) {
    sum = xs[i] + xs[j];

    if (sum === n) return [xs[i], xs[j]];

    if (sum < n) {
      ++i;
      ++j;
    }
    if (sum > n) {
      --i;
    }
  }

  return undefined;
}

export { findPair };
