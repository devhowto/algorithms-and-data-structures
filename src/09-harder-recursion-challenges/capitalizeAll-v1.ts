//
// tags: recursion string
//

import {
  head,
  tail,
  isEmpty,
  capitalize,
} from "/src/tslib/index.ts";

/**
 * Capitalizes the first letter of each string in `strs`.
 *
 * - T.C: O(n).
 * - S.C: O(n).
 *
 * @sig [String] -> [String]
 */
export function capitalizeAll(strs: string[]): string[] {
  return (function run(ss: string[], acc: string[]): string[] {
    if (isEmpty(ss)) return acc;
    return run(tail(ss), [...acc, capitalize(head(ss))]);
  })(strs, []);
}
