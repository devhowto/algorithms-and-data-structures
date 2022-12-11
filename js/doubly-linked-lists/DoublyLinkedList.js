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

  shift() {
    if (this.length === 0) return null;

    var oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
    }

    oldHead.next = null;
    --this.length;

    return oldHead;
  }

  unshift(val) {
    var node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    ++this.length;

    return this;
  }

  get(idx) {
    var len = this.length;

    if (len === 0) return null;

    // Index out of bounds.
    if (idx < 0 || idx >= len) return null;

    // if (len === 1 && idx === 0)
    //   return this.head;

    // Round up to int.
    var mid = len / 2 | 0;
    console.log('==== mid', mid);

    // Handles from head to middle.
    if (idx <= mid) {
      var i = 0;
      var node = this.head;

      while (i <= mid) {
        if (i === idx) return node;
        node = node.next;
        ++i;
      }
    } else {
      var i = len - 1;
      var node = this.tail;

      while (i > mid) {
        if (i == idx) return node;
        node = node.prev;
        --i;
      }
    }
  }
}

export {
  Node,
  DoublyLinkedList,
};
