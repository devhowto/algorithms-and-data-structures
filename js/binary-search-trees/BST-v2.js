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
   * NOTE: This implementation of `toArr()` makes use of `Queue`. Our
   * Queue implementation makes a node of the value passed. So if we
   * pass a node already, the queue's `val` will be a node itself.
   * Therefore, when we dequeue, we may need to unwrap the original
   * node value from the queues node.
   */
  toArr() {
    if (this.root === null) return [];

    debugger;
    var queue = new Queue(),
        arr = [],
        node = this.root;

    queue.enqueue(node);

    while (queue.size !== 0) {
      // `.val` to unwrap the original node from the queue.
      node = queue.dequeue().val;
      arr.push(node.val);

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    return arr;
  }
}

export {
  Node,
  BST,
};
