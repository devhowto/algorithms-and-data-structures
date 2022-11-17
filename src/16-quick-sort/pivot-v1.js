const log = console.log.bind(console);

/**
 * A helper function to swap array elements.
 *
 * NOTE: Swaps in-place. Mutates the input array.
 *
 * @sig Number Number [a] -> [a]
 */
function swap(idx1, idx2, xs) {
  // var tmp = xs[idx1];
  // xs[idx1] = xs[idx2];
  // xs[idx2] = tmp;
  [xs[idx1], xs[idx2]] = [xs[idx2], xs[idx1]];
}

/**
 * A helper pivot function for quick sort ascending sort.
 *
 * @sig [Number] Number
 */
function pivot(xs, ini = 0) {
  if (xs.length === 0) return -1;

  var p = xs[ini];
  var swpIdx = ini;

  for (var i = ini + 1; i < xs.length; ++i) {
    if (p > xs[i]) {
      // Num of elements less than p.
      ++swpIdx;
      swap(swpIdx, i, xs);
    }
  }

  swap(swpIdx, ini, xs);

  return swpIdx;
}

export { pivot };
