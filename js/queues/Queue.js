class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    var oldFirst = this.first;

    // first === last
    if (this.size === 1)
      this.first = this.last = null;
    else
      this.first = oldFirst.next;

    --this.size;

    oldFirst.next = null;

    return oldFirst;
  }
}

export { Queue };
