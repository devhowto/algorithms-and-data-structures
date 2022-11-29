function swap(xs, idx1, idx2) {
  [xs[idx1], xs[idx2]] = [xs[idx2], xs[idx1]];
}

/**
 * Bubble-sorts an array of numbers in ascending order.
 *
 * Good implementation as on each iteration of the outer loop, we work
 * on an every-shrinking portion of the array to avoid working on
 * already-sorted elements.
 *
 * Also, after each pass a check is performed to know if there has been
 * a swap in the previous pass. If there has not been a swap, it is
 * clear the array is sorted at this point and no further iterations are
 * necessary.
 *
 * - T.C: O(n) for best case scenario (array is already almost entirely
 *        sorted, but O(n²) if not.
 * - S.C: O(1).
 *
 * @sig [Number] -> [Number]
 */
function bsAsc(xs) {
  var noSwaps;

  for (var i = xs.length - 1; i >= 0; --i) {
    noSwaps = true;

    for (var j = 0; j < i; ++j) {
      if (xs[j] > xs[j + 1]) {
        swap(xs, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return xs;
}

export { bsAsc };
