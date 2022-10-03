//
// tags: search loop subsequence
//

/**
 * Checks whether `sub` is a subsequence of `str`.
 *
 * - Time complexity: `O(n + m)`.
 * - Space complexity: `O(1)`.
 *
 * String String -> String
 */
function isSubSeq(sub: string, str: string): boolean {
  if (sub.length > str.length) return false;

  let idxSub = 0;
  let idxStr = 0;

  while (idxStr < str.length) {
    if (sub[idxSub] === str[idxStr]) ++idxSub;
    if (idxSub === sub.length) return true;
    ++idxStr;
  }

  return false;
}

export { isSubSeq };
