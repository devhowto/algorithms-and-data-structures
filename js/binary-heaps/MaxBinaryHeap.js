import { swap } from '../jslib/index.js';

class MaxBinaryHeap {
  constructor() {
    this.vals = [];
  }

  /**
   * Inserts a value into the heap.
   *
   * @sig Unknown -> Void
   */
  insert(val) {
    this.vals.push(val);

    var childIdx = this.vals.length - 1;
    var parentIdx;

    while (childIdx > 0) {
      parentIdx = (childIdx - 1) / 2 | 0;
      var parentVal = this.vals[parentIdx];

      if (val <= parentVal) break;

      swap(this.vals, childIdx, parentIdx);

      childIdx = parentIdx;
    }
  }
}

export { MaxBinaryHeap };
