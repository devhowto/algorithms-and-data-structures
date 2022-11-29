import { countDigits, max } from '../jslib/index.js';

/**
 * Returns the length of digits on the largest number in `xs`.
 *
 * @sig [Int] -> Int
 */
function mostDigits(xs) {
  var maxDigits = 0;

  for (var i = 0; i < xs.length; ++i)
    maxDigits = max(countDigits(xs[i]), maxDigits);

  return maxDigits;
}

export { mostDigits };
