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
    this.adj[vtx1].push({ name: vtx2, weight });
    this.adj[vtx2].push({ name: vtx1, weight });
  }

  /**
   * Finds the shortest path using a single weight/distance attribute
   * using the Dijkstra's algorithm.
   */
  shortestPath(start, finish) {
    var { adj } = this,
        pq = new PQueue(),
        dist = {},
        prev = {},
        path = [],
        vtx,
        minVtxName,
        neighborIdx,
        nextNode,
        nextNeighborName,
        candidateDist;

    // Initialize state.
    for (vtx in adj) {
      if (vtx === start) {
        dist[vtx] = 0;
        pq.enqueue(vtx, 0);
      } else {
        dist[vtx] = Infinity;
        pq.enqueue(vtx, Infinity);
      }

      prev[vtx] = null;
    }

    //
    // As long as there are nodes to visit. Note that we may stop
    // looping as soon as we have an asnwer despite this check.
    //
    while (pq.values.length) {
      minVtxName = pq.dequeue().value;

      if (minVtxName === finish) {
        while (prev[minVtxName]) {
          path.push(minVtxName);
          minVtxName = prev[minVtxName];
        }

        return path.concat(minVtxName).reverse();
      }

      if (!minVtxName || dist[minVtxName] === Infinity) continue;

      for (neighborIdx in adj[minVtxName]) {
        nextNode = adj[minVtxName][neighborIdx];
        nextNeighborName = nextNode.name;
        candidateDist = dist[minVtxName] + nextNode.weight;

        if (candidateDist >= dist[nextNeighborName]) continue;

        dist[nextNeighborName] = candidateDist;
        prev[nextNeighborName] = minVtxName;
        pq.enqueue(nextNeighborName, candidateDist);
      }
    }
  }
}

var wg = new WGraph();

wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');

wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('E', 'F', 1);

console.dir(wg.adj, { depth: null });

console.log(wg.shortestPath('A', 'E'));

export { WGraph };
