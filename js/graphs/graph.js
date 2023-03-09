/**
 * A simplified undirected graph class.
 */
class Graph {
  constructor() {
    this.adj = {};
  }

  /**
   * Adds a new vertex pointing to an initial empty array for the edges.
   *
   * @param {string} name
   * @return {boolean} Returns `false` if the name is duplicate (and
   *   therefore not added to the adjacency list), or `true` if the
   *   vertex is properly added.
   */
  addVertex(name) {
    if (this.adj[name]) return false;

    this.adj[name] = [];

    return true;
  }
}

export { Graph };
