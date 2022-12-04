class Node {
  /**
   * Creates a node.
   *
   * @param {unknown} val
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      //
      // !!! ORDER OF THESE STATEMENTS MATER !!!
      //
      this.tail.next = node;
      this.tail = node;
    }

    ++this.length;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    var cur = this.head;
    var tail = cur;

    while (cur.next) {
      tail = cur;
      cur = cur.next;
    }

    this.tail = tail;
    this.tail.next = null;

    --this.length;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return cur;
  }

  shift() {
    if (this.length === 0) return undefined;

    var shifted = this.head;
    this.head = this.head.next;

    --this.length;

    if (this.length === 0) this.tail = null;

    return shifted;
  }

  unshift(val) {
    var node = new Node(val);

    if (this.length === 0) this.tail = node;
    else node.next = this.head;

    this.head = node;

    ++this.length;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    var cnt = 0;
    var cur = this.head;

    while (cnt++ !== idx) cur = cur.next;

    return cur;
  }

  set(idx, val) {
    var node = this.get(idx);
    if (node === null) return false;

    node.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    else if (idx === this.length) this.push(val);
    else if (idx === 0) this.unshift(val);

    else {
      var node = new Node(val);
      var prev = this.get(idx - 1);

      node.next = prev.next;
      prev.next = node;

      ++this.length;
    }

    return true;
  }
}

export { Node, SinglyLinkedList };
