import { getDigit } from '../jslib/index.js';
import { mostDigits } from './mostDigits.js';

/**
 * Radix-sort an array of whole numbers (positive integers).
 *
 * - T.C: O(kn).
 * - S.C: O(n + k).
 *
 * @sig [Int] -> [Int]
 */
function rsAsc(xs) {
  var len = xs.length;
  var maxDigCnt = mostDigits(xs);

  for (var k = 0; k < maxDigCnt; ++k) {
    var buckets = Array.from({ length: 10 }, () => []);

    for (var i = 0; i < len; ++i) {
      var digit = getDigit(xs[i], k);
      buckets[digit].push(xs[i]);
    }

    xs = [].concat(...buckets);
  }

  return xs;
}

export { rsAsc };
