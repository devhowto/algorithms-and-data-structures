//
// tags: loop search substring
//

/**
 * Finds the length of the longest substring of distinct chars.
 *
 * This solution is from Colt Steele.
 *
 * - T.C: `O(n)`.
 * - S.C: `O(n)`.
 *
 * @sig String -> Number
 */
function findLongestSubstr(str: string): number {
  let longest = 0;
  const seen: Record<string, number> = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const chr = str[i];

    if (seen[chr]) {
      start = Math.max(start, seen[chr]);
    }

    longest = Math.max(longest, i - start + 1); // <1>

    seen[chr] = i + 1; // <2>
  }

  return longest;
}

export { findLongestSubstr };
