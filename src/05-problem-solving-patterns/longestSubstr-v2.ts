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
  let start = 0;
  const seenAt: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    const chr = str[i];

    if (chr in seenAt) {
      start = Math.max(start, seenAt[chr]);
    }

    longest = Math.max(longest, i - start + 1); // <1>

    seenAt[chr] = i + 1; // <2>
  }

  return longest;
}

export { findLongestSubstr };
