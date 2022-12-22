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

  insert(val) {
    var newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    return (function go(bst, node) {
      if (node.val < bst.val) {
        console.log('==== ', bst.val, node.val);
        if (bst.left) {
          return go(bst.left, node);
        } else {
          bst.left = node;
          return bst;
        }
      }
      else if (node.val > bst.val) {
        if (bst.right) {
          return go(bst.right, node);
        } else {
          bst.right = node;
          return bst;
        }
      }
    }(this.root, newNode));
  }
}

export {
  Node,
  BST,
};
