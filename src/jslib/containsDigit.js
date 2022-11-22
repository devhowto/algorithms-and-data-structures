/**
 * Checks whether the number `n` contains the digit `d`.
 *
 * NOTE: This algorithm relies on simple maths instead of converting
 * the number to a string.
 *
 * It stops as soon as we find one matching digit without iterating
 * over all the digits if it can be avoided.
 *
 * @param d The digit to search for.
 * @param n The input number try to find the digit in.
 * @returns A boolean indicating whether `num` contains `dig`.
 *
 * @sig Number Number -> Boolean
 */
function containsDigit(d, n) {
  var lead = n < 0 ? -1 * n : n;

  while (lead !== 0) {
    var rem = lead % 10;

    if (rem === d) return true;

    lead = (lead - rem) / 10;
  }

  return false;
}

export { containsDigit };
