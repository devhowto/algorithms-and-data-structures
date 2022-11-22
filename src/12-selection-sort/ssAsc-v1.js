import { swap } from '../jslib/index.js';

/**
 * Selection-sorts an array of integers in ascending order.
 *
 * The sorting is performed in-place, i.e., it mutates the input array
 * and does not require extra space.
 *
 * - T.C: O(n²).
 * - S.C: O(1).
 *
 * @sig [Number] -> [Number]
 */
function ssAsc(xs) {
  var len = xs.length;

  for (var i = 0; i < len; ++i) {
    var idxIni = i;
    var idxMin = i;

    for (var j = i + 1; j < len; ++j) {
      if (xs[j] < xs[idxMin])
        idxMin = j;
    }

    if (xs[idxMin] < xs[idxIni])
      swap(xs, idxMin, idxIni);
  }

  return xs;
}

export { ssAsc };
