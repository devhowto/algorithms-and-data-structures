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
 * @sig [Number] -> [Number]
 */
function bsAsc(xs) {
  for (var i = xs.length - 1; i >= 0; --i)
    for (var j = 0; j < i; ++j)
      if (xs[j] > xs[j + 1])
        swap(xs, j, j + 1);

  return xs;
}

export { bsAsc };
