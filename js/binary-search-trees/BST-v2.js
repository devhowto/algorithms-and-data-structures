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

    var curNode = this.root;

    while (1) {
      ////
      // Ignore duplicate nodes. Simply bail out.
      //
      if (val === curNode.val) return this;

      if (val < curNode.val) {
        if (curNode.left === null) {
          curNode.left = newNode;
          return this;
        }

        curNode = curNode.left;
      } else {
        if (curNode.right === null) {
          curNode.right = newNode;
          return this;
        }

        curNode = curNode.right;
      }
    }
  }

  find(val) {
    if (this.root === null) return null;

    var curNode = this.root,
        found = false;

    while (!found && curNode) {
      if (curNode.val === val) return curNode;

      curNode = val < curNode.val
        ? curNode.left
        : curNode.right;
    }

    return found ? curNode : null;
  }
}

export {
  Node,
  BST,
};
