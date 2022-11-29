//
// tags: recursion string palindrome
//

import {
  length,
  isEmpty,
  head,
  last,
} from "/src/tslib/index.ts";

/**
 * Drops the first and last chars of a string.
 *
 * @sig String -> String
 */
function dropEnds(s: string): string {
  return s.slice(1, length(s) - 1);
}

/**
 * Checks whether the given string is a palindrome.
 *
 * This is a simple version that assumes the input is simple ASCII
 * English alphabet in the same case and without any other punctuation
 * characters.
 *
 * - `T.C`: `O(n)`. Number of recursive calls is directly proportional
 *    to the length of the input string.
 * - `S.C`: `O(1)`. No extra space is required to store the results of
 *    the computation.
 *
 * @sig String -> Boolean
 */
export function isPalind(s: string): boolean {
  if (isEmpty(s) || length(s) === 1) return true;

  return head(s) === last(s)
    ? isPalind(dropEnds(s))
    : false;
}
