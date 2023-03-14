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


/**
 * An Undirected Weighted Graph class.
 */
class WGraph {
  constructor() {
    this.adj = {};
  }

  /**
   * Adds a new vertex if it does not yet exist.
   *
   * @param {string} vtx
   */
  addVertex(vtx) {
    if (!this.adj[vtx]) this.adj[vtx] = [];
  }

  /**
   * Adds an weighted edge between two vertices.
   *
   * @param {string} vtx1
   * @param {string} vtx2
   * @param {number} weight
   */
  addEdge(vtx1, vtx2, weight) {
    this.adj[vtx1].push({ node: vtx2, weight });
    this.adj[vtx2].push({ node: vtx1, weight });
  }
}

var wg = new WGraph();

wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');

wg.addEdge('A', 'B', 9);
wg.addEdge('A', 'C', 5);
wg.addEdge('B', 'C', 7);

console.dir(wg.adj, { depth: null });
