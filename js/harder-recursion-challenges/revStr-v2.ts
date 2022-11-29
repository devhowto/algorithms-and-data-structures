//
// tags: recursion string reverse
//

import {
  isEmpty,
  tail,
  head,
} from "/src/tslib/index.ts";

/**
 * Reverses a string.
 *
 * - `T.C`: `O(n)`.
 * - `S.C`: `O(n)`.
 *
 * @sig String -> String
 */
export function revStr(s: string): string {
  return isEmpty(s)
    ? ""
    : "" + revStr(tail(s)) + head(s);
}
//
// NOTE: This function handles strings whose chars are up to 2 bytes.
// Unicode chars like “✔” (0x2714) are handled fine, but others using 3
// or 4 bytes ARE NOT, for example, “💩” (0x0001f4a9). That is because
// ECMAScript uses UTF-16.
////
