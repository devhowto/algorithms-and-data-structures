//
// tags: recursion loop search substring
//

/**
 * Counts the shallow keys in the input object.
 *
 * Only the first level of keys is counted. Nested keys
 * are NOT accounted for.
 *
 * @sig Object -> Number
 */
function keysLen(o: object): number {
  return Object.keys(o).length;
}

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
function fn(str: string): number {
  const seenAt: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    const chr = str[i];

    if (seenAt[chr] === undefined)
      seenAt[chr] = i;
    else
      return Math.max(
        keysLen(seenAt),
        fn(str.slice(seenAt[chr] + 1))
      );
  }

  return keysLen(seenAt);
}

export { fn as findLongestSubstr };
