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
  var j = xs.length - 1;
  var sum;

  while (i < j) {
    sum = xs[i] + xs[j];

    if (sum === n) return [xs[i], xs[j]];

    if (sum < n) ++i;
    if (sum > n) --j;
  }

  return undefined;
}

export { findPair };
