//
// tags: sort merge-sort algorithm
//

import { merge } from './merge';

/**
 * Sorts an array of numbers in ascending order.
 *
 * - T.C: O(n log₂ n).
 * - S.C: O(n).
 *
 * @sig [Number] -> [Number]
 */
function sortAsc(xs) {
  var len = xs.length;

  if (len <= 1) return xs;

  var mid = Math.floor(len / 2);
  var left = sortAsc(xs.slice(0, mid));
  var right = sortAsc(xs.slice(mid, len));

  return merge(left, right);
}

export { merge, sortAsc };
