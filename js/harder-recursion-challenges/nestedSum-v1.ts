//
// tags: recursion sum tree walk
//

import { isNum } from "/src/tslib/index.ts";

type Walkable = {
  [key: string]: number | Walkable;
}

/**
 * Sums all even values in the nested object.
 *
 * - T.C: O(n).
 * - S.C: O(1).
 *
 * @sig Object -> Number
 */
export function nestedSum(obj: Walkable): number {
  return Object.keys(obj).reduce(
    function reducer(acc: number, key: string): number {
      const val = obj[key];
      return acc + (isNum(val) ? val : nestedSum(val));
    },
    0
  );
}
//
// Did not use `keys()` here as it does not work well with `Walkable`
// and `reduce()`.
////
