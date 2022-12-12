'use strict';

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

    // Index out of bounds.
    if (idx < 0 || idx >= len) return null;

    // Round up to int.
    var mid = len / 2 | 0;

    var i, node;

    if (idx <= mid) {
      i = 0;
      node = this.head;

      while (i++ !== idx) node = node.next;
    } else {
      i = len - 1;
      node = this.tail;

      while (i-- !== idx) node = node.prev;
    }

    return node;
  }

  set(idx, val) {
    var node = this.get(idx);
    if (node === null) return false;

    node.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var foundNode = this.get(idx - 1);
    var afterNode = foundNode.next;

    newNode.prev = foundNode;
    foundNode.next = newNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    ++this.length;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    if (idx === 0) return this.shift(idx);
    if (idx === this.length - 1) return this.pop(idx);

    var foundNode = this.get(idx);
    var nodeBefore = foundNode.prev;
    var nodeAfter = foundNode.next;

    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;

    foundNode.next = null;
    foundNode.prev = null;

    --this.length;

    return foundNode;
  }
}

export {
  Node,
  DoublyLinkedList,
};
