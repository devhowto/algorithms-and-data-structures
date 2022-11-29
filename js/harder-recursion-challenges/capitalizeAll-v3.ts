//
// tags: recursion string
//

import {
  capitalize,
} from "/src/tslib/index.ts";

/**
 * Capitalizes the first letter of each string in `strs`.
 *
 * This one looks like Haskell pattern matching because of the
 * destructuring `[x, ...xs]`, which in haskell would do something
 * like `(x:xs)`. The idea here is similar.
 *
 * - T.C: O(n).
 * - S.C: O(n).
 *
 * @sig [String] -> [String]
 */
export function capitalizeAll([x, ...xs]: string[]): string[] {
  return x === undefined
    ? []
    : [capitalize(x), ...capitalizeAll(xs)];
}
