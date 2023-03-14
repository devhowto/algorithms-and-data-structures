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

  /**
   * Finds the shortest path using a single weight/distance attribute
   * using the Dijkstra's algorithm.
   */
  shortestPath(start, finish) {
    var { adj } = this,
        nodes = new PQueue(),
        dist = {},
        prev = {},
        path = [],
        vtx,
        smallest,
        neighborIdx,
        nextNode,
        nextNeighbor,
        candidate;

    // Initialize state.
    for (vtx in adj) {
      if (vtx === start) {
        dist[vtx] = 0;
        nodes.enqueue(vtx, 0);
      } else {
        dist[vtx] = Infinity;
        nodes.enqueue(vtx, Infinity);
      }

      prev[vtx] = null;
    }

    //
    // As long as there are nodes to visit. Note that we may stop
    // looping as soon as we have an asnwer despite this check.
    //
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        while (prev[smallest]) {
          path.push(smallest);
          smallest = prev[smallest];
        }

        return path.concat(smallest).reverse();
      }

      if (smallest && dist[smallest] !== Infinity) {
        for (neighborIdx in adj[smallest]) {
          nextNode = adj[smallest][neighborIdx];
          candidate = dist[smallest] + nextNode.weight;
          nextNeighbor = nextNode.node;

          if (candidate < dist[nextNeighbor]) {
            dist[nextNeighbor] = candidate;
            prev[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
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
