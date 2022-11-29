//
// tags: recursion reduce walk object tree
//

import { concat } from "/src/tslib/index.ts";

type Walkable = {
  [key: string]: string | Walkable;
};

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
 * Collects all the strings in the object.
 *
 * - T.C: O(n).
 * - S.C: O(1).
 *
 * @sig {k: v} -> [v]
 */
export function collectStrs(obj: Walkable): string[] {
  return Object.keys(obj).reduce(
    function reducer(acc: string[], key: string): string[] {
      const val = obj[key];

      if (isWalkable(val))
        return concat(acc, collectStrs(val));
      else
        return [...acc, val];
    },
    []
  );
}
