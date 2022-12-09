const log = console.log.bind(console);

var dir = function dir (label, o) {
  log(label);
  console.dir(o, { depth: null });
};

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    ++this.length;

    return this;
  }

  pop() {
    if (this.length === 0) return null;

    var popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
    }

    popped.prev = null;
    --this.length;

    return popped;
  }
}

export {
  Node,
  DoublyLinkedList,
};
