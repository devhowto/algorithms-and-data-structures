//
// tags: recursion string
//

import {
  head,
  tail,
  isEmpty,
  concat,
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
  return isEmpty(strs)
    ? []
    : concat(
        ([] as string[]),
        [capitalize(head(strs)), ...capitalizeAll(tail(strs))]
      );
}
