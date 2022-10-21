//
// tags: recursion walk tree object
//

import {
  isNum,
} from "/src/tslib/index.ts";

type Walkable = {
  [key: string]: unknown | Walkable;
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
 * Walks an object converting number leaves to string.
 *
 * - T.C: O(n).
 * - S.C: O(n).
 *
 * @sit {k: v} -> {k: v}
 */
export function walkNumToStr(obj: Walkable): Walkable {
  return Object.keys(obj).reduce(
    function reducer(acc: Walkable, key: string): Walkable {
      const val = obj[key];

      if (isWalkable(val)) acc[key] = walkNumToStr(val);
      else if (isNum(val)) acc[key] = String(val);
      else acc[key] = val;

      return acc;
    },
    {},
  );
}
