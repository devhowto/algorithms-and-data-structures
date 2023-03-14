/**
 * A very much simplified priority queue class as a helper for
 * our graph traversal stuff.
 */
class PQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Enqueues a value with a given priority to the queue.
   *
   * This is a very slow implementation O(n * log(n)) as we are sorting
   * in a naive way to avoid overcomplicating things.
   */
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort(function sortFnn(a, b) {
      return a.priority - b.priority;
    });
  }
}
