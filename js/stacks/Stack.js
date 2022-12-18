class Node {
  constructor(val) {
    this.val = val;

    //
    // I'll call it prev because “the top points to the previous node”
    // (except for the empty or single- element stack).
    //
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.size === 0) {
      this.top = newNode;
    } else {
      var oldTop = this.top;
      this.top = newNode;
      newNode.prev = oldTop;
    }

    return ++this.size;
  }
}

export { Stack };
