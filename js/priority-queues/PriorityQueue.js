import { swap } from '../jslib/index.js';

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

  enqueue(val, priority) {
    var newNode = new Node(val, priority);

    this.vals.push(newNode);

    var idx = this.vals.length - 1;
    var pIdx;

    while (idx > 0) {
      var pIdx = ((idx - 1) / 2) | 0;

      if (newNode.priority >= this.vals[pIdx].priority)
        break;

      swap(this.vals, pIdx, idx);

      idx = pIdx;
    }
  }

  dequeue() {
    if (this.vals.length === 0) return null;

    var min = this.vals[0];
    var last = this.vals.pop();

    if (this.vals.length > 0) {
      this.vals[0] = last;
      this.#heapify(0);
    }

    return min;
  }

  #heapify(pIdx) {
    var idx,
        len = this.vals.length,
        lIdx = 2 * pIdx + 1,
        rIdx = 2 * pIdx + 2;

    if (
      (lIdx < len) &&
      (this.vals[lIdx].priority < this.vals[pIdx].priority)
    )
      idx = lIdx;

    if (
      (rIdx < len) &&
      (idx === undefined && this.vals[rIdx].priority < this.vals[pIdx].priority) ||
      (idx !== undefined && this.vals[rIdx].priority < this.vals[lIdx].priority)
    )
      idx = rIdx;

    if (idx === undefined) return;

    swap(this.vals, idx, pIdx);

    // idx becames the new pIdx 😀
    this.#heapify(idx);
  }
}

var queue = new PriorityQueue();

// queue.enqueue('watch', 5);
// queue.enqueue('food', 2);
// queue.enqueue('exercise', 3);
queue.enqueue('water', 1);
queue.enqueue('sleep', 0);

queue.dequeue();
queue.dequeue();
queue.dequeue();

export { PriorityQueue, Node };
