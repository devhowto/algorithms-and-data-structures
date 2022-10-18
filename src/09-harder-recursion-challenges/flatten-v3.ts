//
// tags: recursion array concat
//

import { isArr } from "/src/tslib/index.ts";

/**
 * Flattens an array.
 *
 * - T.C: O(n).
 * - S.C: O(n).
 *
 * @sig Array -> Array
 */
export function flatten<T>(xs: T[]): T[] {
  return xs.reduce((acc: T[], x: T | T[]): T[] => {
    return isArr(x)
      ? [...acc, ...flatten(x)]
      : [...acc, x];
  }, []);
}
