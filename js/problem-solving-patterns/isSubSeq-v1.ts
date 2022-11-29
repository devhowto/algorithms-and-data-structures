//
// tags: search loop subsequence
//

/**
 * Checks whether `sub` is a subsequence of `str`.
 *
 * Solution using the multiple pointers approach.
 *
 * - Time complexity: `O(n + m)`.
 * - Space complexity: `O(1)`.
 *
 * String String -> Boolean
 */
function isSubSeq(sub: string, str: string): boolean {
  if (sub.length > str.length) return false;

  let l = 0,
      r = 0;

  while (l <= sub.length && r <= str.length) {
    if (l === sub.length) return true; // <1>

    if (sub[l] === str[r]) { // <2>
      ++l;
      ++r;
    } else { // <3>
      ++r;
    }
  }

  return false;
}

export { isSubSeq };
