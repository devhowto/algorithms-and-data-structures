import { swap } from '../jslib/index.js';

class MaxBinaryHeap {
  constructor() {
    this.vals = [];
  }

  /**
   * Inserts a value into the heap.
   *
   * - T.C: O(log n).
   * - S.C: O(n).
   *
   * @sig Unknown -> Void
   */
  insert(val) {
    this.vals.push(val);

    var childIdx = this.vals.length - 1;
    var parentIdx;

    while (childIdx > 0) {
      parentIdx = ((childIdx - 1) / 2) | 0;
      var parentVal = this.vals[parentIdx];

      if (val <= parentVal) break;

      swap(this.vals, childIdx, parentIdx);

      childIdx = parentIdx;
    }
  }

  /**
   * Extracts the max from the max binary heap.
   *
   * - T.C: O(log n) for the average case.
   * - TODO: S.C: O(n???).
   *
   * @sig Void -> Unknown
   */
  extract() {
    if (this.vals.length === 0) return null;

    var max = this.vals[0];
    var last = this.vals.pop();

    ////
    // If the array is already empty, don't add `last` back into the
    // array and heapify beause it means we are done.
    //
    if (this.vals.length > 0) {
      this.vals[0] = last;

      this.#heapify(0);
    }

    return max;
  }

  /**
   * Max-heapifies the subtree with the root at index `p`.
   *
   * @param {number} p The index where the work should start.
   * @sig Int -> Void
   */
  #heapify(p) {
    var i,
        l = 2 * p + 1,
        r = 2 * p + 2,
        vals = this.vals,
        len = vals.length;

    if (l < len)
      if (vals[l] > vals[p])
        i = l;

    if (r < len)
      if (
        (i === undefined && vals[r] > vals[p]) ||
        (i !== undefined && vals[r] > vals[l])
      )
        i = r;

    if (i === undefined) return;

    swap(vals, i, p);

    return this.#heapify(i);
  }
}

export { MaxBinaryHeap };
