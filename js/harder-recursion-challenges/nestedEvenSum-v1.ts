//
// tags: recursion sum tree walk
//

import { isNum, isEven } from "/src/tslib/index.ts";

type Walkable = {
  [key: string]: number | Walkable;
}

/**
 * Checks if the value is a `Walkable`.
 *
 * In the context of this module, a `Walkable` is a key/value pair (an
 * object-like entity). Sometimes the value is a number, sometimes
 * another `Walkable`. If the value is an object (therefore, not a
 * number 😅), it is a `Walkable`. Thus, our simple check in the
 * implementation does the trick for our current intents and purposes.
 */
function isWalkable(val: unknown): val is Walkable {
  return Object(val) === val;
}

/**
 * Sums all even values in the nested object.
 *
 * - T.C: O(n).
 * - S.C: O(1).
 *
 * @sig Object -> Number
 */
export function nestedEvenSum(obj: Walkable): number {
  return Object.keys(obj).reduce(
    function reducer(acc: number, key: string): number {
      const val = obj[key];

      if (isWalkable(val)) return acc + nestedEvenSum(val);
      if (isNum(val) && isEven(val)) return acc + val;
      return acc;
    },
    0
  );
}
//
// Did not use `keys()` here as it does not work well with `Walkable`
// and `reduce()`.
////
