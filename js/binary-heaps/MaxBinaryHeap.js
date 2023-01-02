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

    if (this.vals.length > 0) {
      ////
      // Do not add `last` back to the array if it is already empty
      // because in this case we are done.
      //
      this.vals[0] = last;

      this.#trickleDown();
    }

    return max;
  }

  #trickleDown() {
    var len = this.vals.length;
    var elem = this.vals[0];
    var parentIdx = 0;
    var leftIdx, rightIdx, left, right, swapIdx;

    while (true) {
      leftIdx = parentIdx * 2 + 1;
      rightIdx = parentIdx * 2 + 2;
      swapIdx = undefined;

      if (leftIdx < len) {
        left = this.vals[leftIdx];
        if (left > elem) swapIdx = leftIdx;
      }

      if (rightIdx < len) {
        right = this.vals[rightIdx];

        if (
          (swapIdx === undefined && right > elem) ||
          (right !== undefined && right > left)
        )
          swapIdx = rightIdx;
      }

      if (swapIdx === undefined) break;

      swap(this.vals, parentIdx, swapIdx);

      parentIdx = swapIdx;
    }
  }
}

export { MaxBinaryHeap };
