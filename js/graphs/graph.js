/**
 * A simplified undirected graph class.
 */
class Graph {
  constructor() {
    /**
     * A key/val storage for vertices. The vertices are string keys
     * and the edges are arrays of strings referencing other vertices.
     */
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
   * Removes a vertex (including all of its connected edges).
   *
   * @param {string} name
   * @return {boolean} Returns a boolean indicating whether or not it
   *   was possible to remove the vertex.
   */
  removeVertex(name) {
    if (!this.adj[name]) return false;

    [...this.adj[name]].forEach(edge => {
      var res = this.removeEdge(name, edge);
    });

    delete this.adj[name];

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

  /**
   * Removes an undirected edge from two vertices.
   *
   * @param {string} vtx1
   * @param {string} vtx2
   * @return {boolean}
   */
  removeEdge(vtx1, vtx2) {
    if (!this.adj[vtx1] || !this.adj[vtx2]) return false;

    this.adj[vtx1].splice(this.adj[vtx1].indexOf(vtx2), 1);
    this.adj[vtx2].splice(this.adj[vtx2].indexOf(vtx1), 1);

    return true;
  }

  /**
   * Recursively visits all nodes in a depth-first approach.
   *
   * @param {string} startVtx A valid vertex where to start traversal.
   * @returns {Array<string>} An array of vertex names.
   */
  dfs(startVtx) {
    var vtxs = [],
        seen = {},
        { adj } = this;

    //
    // If graph is empty.
    //
    if (Object.keys(adj).length === 0) return [];

    (function go(vtx) {
      if (!vtx) return null;

      seen[vtx] = 1;
      vtxs.push(vtx);

      [...adj[vtx]].forEach(function eachNeighborVtx(neighborVtx) {
        if (!seen[neighborVtx]) go(neighborVtx);
      });
    })(startVtx);

    return vtxs;
  }

  /**
   * Iteratively visits all nodes in a depth-first approach.
   *
   * @param {string} startVtx A valid vertex where to start traversal.
   * @returns {Array<string>} An array of vertex names.
   */
  dfsIt(startVtx) {
    var { adj } = this,
        vtxs = [],
        seen = { [startVtx]: 1 },
        stack = [startVtx],
        currVtx;

    while (stack.length) {
      currVtx = stack.pop();
      vtxs.push(currVtx);

      adj[currVtx].forEach(neighborVtx => {
        if (!seen[neighborVtx]) {
          seen[neighborVtx] = 1;
          stack.push(neighborVtx);
        }
      });
    }

    return vtxs;
  }

  /**
   * Iteratively visits all nodes in a depth-first approach.
   *
   * @param {string} startVtx A valid vertex where to start traversal.
   * @returns {Array<string>} An array of vertex names.
   */
  bfsIt(startVtx) {
    var { adj } = this,
        vtxs = [],
        seen = { [startVtx]: 1 },
        queue = [startVtx],
        currVtx;
    console.log(adj);

    while (queue.length) {
      currVtx = queue.shift();
      vtxs.push(currVtx);

      adj[currVtx].forEach(neighborVtx => {
        if (!seen[neighborVtx]) {
          seen[neighborVtx] = 1;
          queue.push(neighborVtx);
        }
      });
    }

    console.log(vtxs);
    return vtxs;
  }
}

export { Graph };
