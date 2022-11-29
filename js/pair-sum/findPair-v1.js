/**
 * Return a pair of `xs` whose sum is equal to `n`. Return `undefined`
 * if no such pair exists.
 *
 * - T.C: O(n²).
 * - S.C: O(1).
 *
 * @sig [Int] Int -> Undefined
 * @sig [Int] Int -> [Int]
 */
function findPair(xs, n) {
  for (var i = 0; i < xs.length; ++i)
    for (var j = i + 1; j < xs.length; ++j)
      if (xs[i] + xs[j] === n) return [xs[i], xs[j]];

  return undefined;
}

export { findPair };
