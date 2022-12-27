import { Queue } from '../queues/Queue.js';

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

  /**
   * Returns an array of the values in breadth-first order.
   *
   */
  toArr() {
    if (this.root === null) return [];

    var q = [],
        arr = [],
        node = this.root;

    q.push(node);

    while (q.length !== 0) {
      node = q.shift();
      console.dir(node, { depth: null });
      arr.push(node.val);

      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
    }

    return arr;
  }
}

export {
  Node,
  BST,
};
