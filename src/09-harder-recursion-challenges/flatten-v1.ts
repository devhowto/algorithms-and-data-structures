//
// tags: recursion array concat
//

import {
  isEmpty,
  head,
  tail,
} from "/src/tslib/index.ts";

const isArray = Array.isArray.bind(Array);

/**
 * Flattens an array.
 *
 * Flattening an array means turning an array of n nested sub-arrays
 * into an array where all elements are brought to the surface.
 *
 * - T.C: O(n).
 * - S.C: O(n).
 *
 * @sig Array -> Array
 */
export function flatten<T>(xs: T[]): T[] {
  return (function go(val: T | T[], acc: T[]): T[] {
    if (isArray(val) && isEmpty(val)) return acc;

    return (isArray(val))
      ? go(head(val), go(tail(val), acc)) // <1>
      : [val, ...acc]; // <2>
  })(xs, []);
}
