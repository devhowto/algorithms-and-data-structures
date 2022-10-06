//
// tags: loop search substring
//

/**
 * Finds the length of the longest substring of distinct chars.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(n)`.
 *
 * @sig String -> Number
 */
function findLongestSubstr(str: string): Number {
  let acc: { [key: string]: number } = {};
  let longestSoFar = 0;
  let tmpLongest = 0;
  let l = 0;
  let r = 0;

  while (l < str.length && r < str.length) {
    if (acc[str[r]]) {
      ++l;
      r = l + 1;
      acc = { [str[l]]: 1 };
      tmpLongest = 1;
      continue;
    }

    acc[str[r]] = 1;

    ++tmpLongest;
    ++r;

    longestSoFar = Math.max(tmpLongest, longestSoFar);
  }

  return longestSoFar;
}

export { findLongestSubstr };
