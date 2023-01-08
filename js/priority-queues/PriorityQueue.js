import {
  swap,
  isNil,
} from '../jslib/index.js';

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

/**
 * A priority queue based on Min Binary Heap (lower
 * values have higher priority).
 */
class PriorityQueue {
  constructor() {
    this.vals = [];
  }

  /**
   * Enqueues a values with the given priority.
   *
   * - T.C: O(log n).
   * - S.C: O(n).
   */
  enqueue(val, priority) {
    this.vals.push(new Node(val, priority));
    this.#bubble(this.vals.length - 1);
  }

  #bubble(newIdx) {
    if (newIdx < 1) return;

    var parentIdx = (newIdx - 1) / 2 | 0;

    if (this.vals[newIdx].priority > this.vals[parentIdx].priority)
      return;

    swap(this.vals, newIdx, parentIdx);

    return this.#bubble(parentIdx);
  }

  /**
   * Dequeues the highest priority element from the queue.
   *
   * - T.C: O(log n).
   * - S.C: O(n).
   */
  dequeue() {
    var len = this.vals.length;

    if (len === 0) return null;

    var min = this.vals[0];
    var last = this.vals.pop();

    if (len > 0) {
      this.vals[0] = last;
      this.#heapify(0);
    }

    return min;
  }

  #heapify(pIdx) {
    var idx,
        len = this.vals.length,
        lIdx = 2 * pIdx + 1,
        rIdx = 2 * pIdx + 2,
        parent = this.vals[pIdx],
        lChild = this.vals[lIdx],
        rChild = this.vals[rIdx];

    if (lIdx < len)
      if (lChild.priority < parent.priority)
      idx = lIdx;

    if (rIdx < len)
      if (
        (isNil(idx) && rChild.priority < parent.priority) ||
        (!isNil(idx) && rChild.priority < lChild.priority)
      )
        idx = rIdx;

    if (isNil(idx)) return;

    swap(this.vals, idx, pIdx);

    // idx becomes the new pIdx 😀
    this.#heapify(idx);
  }
}

export { PriorityQueue, Node };
