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
    // array and heapify because it means we are done.
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
   * @param {number} pIdx The index where the work should start.
   * @sig Int -> Void
   */
  #heapify(pIdx) {
    var idx,
        lIdx = 2 * pIdx + 1,
        rIdx = 2 * pIdx + 2,
        len = this.vals.length;

    if (
      (lIdx < len) &&
      (this.vals[lIdx] > this.vals[pIdx])
    )
      idx = lIdx;

    if (
      (rIdx < len) &&
      (idx === undefined && this.vals[rIdx] > this.vals[pIdx]) ||
      (idx !== undefined && this.vals[rIdx] > this.vals[lIdx])
    )
      idx = rIdx;

    if (idx === undefined) return;

    swap(this.vals, idx, pIdx);

    // idx becomes the new pIdx 😀
    return this.#heapify(idx);
  }
}

export { MaxBinaryHeap };
