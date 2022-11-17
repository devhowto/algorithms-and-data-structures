/*

Let's sort this array of numbers in ascending order.

    [4, 7, 2, 1, 3, 8, 6, 5]

Pick 4 as the pivot (on each iteration, let's always get the first element as the index.
Move all elements that are less than 4 to the left, and elements that are greater than 4 to the right.

Count the numbers that are less than 4.
Three elements (which would go on the positions 0, 1 and 2 of the array.
So, the pivot element should be at position 3.

    [4, 7, 8, 1, 3, 8, 6, 5]

              •
    [2, 1, 3, 4 | 7, 8, 6, 5]
     ----------

Pick 2 as the pivot and repeat the process.
2 should be at position 1

        •
    [1, 2, 3, 4 | 7, 8, 6, 5]
     ----------

Done on the left side.

Focus on the right side.
Pick 7 as the pivot.
It should be a position 6.

                        •
    [1, 2, 3, 4 | 6, 5, 7, 8]
                  ----------

Get 6 as the new pivot.
Should be at position 5.

                  •
    [1, 2, 3, 4 | 5, 6, 7, 8]
                  ----------

Done on the right side too.

------------------------------------------------------------------------
pivot([4, 8, 2, 1, 5, 7, 6, 3])

           pivot
             ^
             |
   [3, 2, 1, 4, 5, 7, 6, 8]
    -------     ----------
       /            \
      v              v
 left portion    right portion

------------------------------------------------------------------------
sortAsc([4, 8, 2, 1, 5, 7, 6, 3], l = 0, r = 7)

                p
sortAsc([3, 2, 1, 4, 5, 7, 6, 8], l = 0
       l     r     l        r

                p
      [1, 2, 3, 4, 5, 7, 6, 8]
             l        l     r
             r

                p
      [1, 2, 3, 4, 5, 6, 7, 8]
                         l  r
*/

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
 * A helper pivot function for quick sort in ascending order.
 *
 * @param {number[]} xs
 * @param {number} [ini=0]
 * @sig [Number] Number -> [Number]
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

const log = console.log.bind(console);

function sortAsc(xs, left = 0, right = xs.length - 1) {
  if (left < right) {
    var pivIdx = pivot(xs, left, right);

    sortAsc(xs, left, pivIdx - 1);
    sortAsc(xs, pivIdx + 1, right);
  }

  return xs;
}

export { pivot, sortAsc };

