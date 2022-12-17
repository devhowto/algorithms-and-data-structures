class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var node = new Node(val);

    if (this.size === 0) {
      this.first = this.last = node;
    } else {
      var oldFirst = this.first;
      this.first = node;
      node.next = oldFirst;
    }

    return ++this.size;
  }
}

export { Stack };
