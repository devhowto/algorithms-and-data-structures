class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a node created from the given `val` into the BST.
   *
   * The BST is modified in place. This method returns the BST
   * reference itself.
   *
   * - T.C: O(log n).
   * - S.C: O(1).
   *
   * @param {unknown} val
   * @returns {BST}
   */
  insert(val) {
    var newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    (function go(bst, node) {
      ///
      // In this implementation, we chose to simply
      // ignore duplicate values.
      //
      if (node.val === bst.val) return;

      if (node.val < bst.val) {
        if (bst.left === null) {
          bst.left = node;
          return bst;
        }

        return go(bst.left, node);
      } else {
        if (bst.right === null) {
          bst.right = node;
          return bst;
        }

        return go(bst.right, node);
      }
    }(this.root, newNode));

    return this;
  }
}

export {
  Node,
  BST,
};
