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

  /**
   * Adds undirected edges to two vertices.
   *
   * @param {string} vtx1
   * @param {string} vtx2
   * @returns {boolean}
   */
  addEdge(vtx1, vtx2) {
    if (!this.adj[vtx1] || !this.adj[vtx2]) return false;

    this.adj[vtx1].push(vtx2);
    this.adj[vtx2].push(vtx1);

    return true;
  }
}

export { Graph };
