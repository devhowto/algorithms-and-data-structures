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
  var left = xs.slice(0, mid);
  var right = xs.slice(mid, len);

  return merge(sortAsc(left), sortAsc(right));
}

export { sortAsc };

sortAsc(['d', 'a', 'c', 'b']);
