import {
  Node,
  DoublyLinkedList,
} from './DoublyLinkedList.js';

describe('Node', () => {
  test('can construct a node', () => {
    var node = new Node(70);
    expect(node.val).toEqual(70);
    expect(node.prev).toEqual(null);
    expect(node.next).toEqual(null);
  });

  test('can connect prev and next', () => {
    var foo = new Node(70);
    var bar = new Node(30);
    var qux = new Node(50);

    bar.prev = foo;
    foo.next = bar;

    bar.next = qux;
    qux.prev = bar;

    expect(foo.next.val).toEqual(30);
    expect(bar.prev.val).toEqual(70);

    expect(bar.next.val).toEqual(50);
    expect(qux.prev.val).toEqual(30);
  });
});

describe('DoublyLinkedList', () => {
  test('can construct an empty list', () => {
    var list = new DoublyLinkedList();
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });

  describe('push(val)', () => {
    test('empty list', () => {
      var list = new DoublyLinkedList();
      var that = list.push(70);

      expect(list.head.val).toEqual(70);
      expect(list.tail.val).toEqual(70);

      expect(list.head.prev).toEqual(null);
      expect(list.tail.next).toEqual(null);

      expect(list.length).toEqual(1);
      expect(that).toEqual(list);
    });

    test('non-empty list', () => {
      var list = new DoublyLinkedList();
      list.push(70);
      var that = list.push(30);

      expect(list.head.val).toEqual(70);
      expect(list.tail.val).toEqual(30);

      expect(list.head.prev).toEqual(null);
      expect(list.tail.next).toEqual(null);

      expect(list.head.next.val).toEqual(30);
      expect(list.tail.prev.val).toEqual(70);

      expect(list.length).toEqual(2);
      expect(that).toEqual(list);
    });
  });

  describe('pop()', () => {
    test('empty list', () => {
      var list = new DoublyLinkedList();
      var popped = list.pop();
      expect(popped).toEqual(null);
    });

    test('single-node list', () => {
      var list = new DoublyLinkedList();
      list.push(70);

      var popped = list.pop();

      expect(popped.val).toEqual(70);
      expect(popped.prev).toEqual(null);

      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);

      expect(list.length).toEqual(0);
    });

    test('two-or-more-node list', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(30).push(50);

      var popped = list.pop();

      expect(popped.val).toEqual(50);
      expect(popped.prev).toEqual(null);

      expect(list.tail.val).toEqual(30);
      expect(list.length).toEqual(2);
    });
  });

  describe('shift()', () => {
    test('empty list', () => {
      var list = new DoublyLinkedList();
      var shifted = list.shift();

      expect(shifted).toEqual(null);
      expect(list.length).toEqual(0);
    });

    test('single-node list', () => {
      var list = new DoublyLinkedList();
      list.push(70);

      var shifted = list.shift();

      expect(shifted.val).toEqual(70);
      expect(shifted.next).toEqual(null);
      expect(shifted.prev).toEqual(null);

      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);

      expect(list.length).toEqual(0);
    });

    test('two-or-more-node list', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(30).push(50);

      var shifted = list.shift();

      expect(shifted.val).toEqual(70);
      expect(shifted.next).toEqual(null);
      expect(shifted.prev).toEqual(null);

      expect(list.head.val).toEqual(30);
      expect(list.head.prev).toEqual(null);
      expect(list.head.next.val).toEqual(50);

      expect(list.length).toEqual(2);
    });
  });

  describe('unshift(val)', () => {
    test('empty list', () => {
      var list = new DoublyLinkedList();

      var unshifted = list.unshift(80);

      expect(list.head.val).toEqual(80);
      expect(list.tail.val).toEqual(80);
      expect(list.length).toEqual(1);
      expect(unshifted).toEqual(list);
    });

    test('single-node list', () => {
      var list = new DoublyLinkedList().push(70);

      var unshifted = list.unshift(80);

      expect(list.head.val).toEqual(80);
      expect(list.tail.val).toEqual(70);

      expect(list.head.next.val).toEqual(70);
      expect(list.head.next.prev.val).toEqual(80);

      expect(list.length).toEqual(2);
      expect(unshifted).toEqual(list);
    });
  });

  describe('get(idx)', () => {
    test('empty list', () => {
      var list = new DoublyLinkedList();

      var node = list.get(3);

      expect(node).toBe(null);
    });

    test('invalid index', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(30).push(50);

      expect(list.get(-1)).toBe(null);
      expect(list.get(3)).toBe(null);
    });

    test('single-node list', () => {
      var list = new DoublyLinkedList().push(70);

      var node = list.get(0);

      expect(node.val).toEqual(70);
    });

    test('six-node list, left half', () => {
      var list = new DoublyLinkedList();
      list
        .push(70)
        .push(30)
        .push(50)
        .push(10)
        .push(60)
        .push(80);

      var nodeAt1 = list.get(1);

      expect(nodeAt1.val).toEqual(30);
    });

    test('six-node list, middle (rounded up)', () => {
      var list = new DoublyLinkedList();
      list
        .push(70)
        .push(30)
        .push(50)
        .push(10)
        .push(60)
        .push(80);

      var nodeAt3 = list.get(3);

      expect(nodeAt3.val).toEqual(10);
    });

    test('six-node list, right half', () => {
      var list = new DoublyLinkedList();
      list
        .push(70)
        .push(30)
        .push(50)
        .push(10)
        .push(60)
        .push(80);

      var nodeAt4 = list.get(4);

      expect(nodeAt4.val).toEqual(60);
    });
  });

  describe('set(idx, val)', () => {
    test('empty list', () => {
      var list = new DoublyLinkedList();
      expect(list.set(0, 70)).toEqual(false);
    });

    test('negative index', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50);
      expect(list.set(-3, 70)).toEqual(false);
    });

    test('index >= list.length', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50);

      //
      // A list with 2 nodes contains index 0 and 1.
      //
      expect(list.set(2, 80)).toEqual(false);
    });

    test('valid existing node index', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50).push(90).push(100).push(-70).push(1e4);
      //                                 3rd
      expect(list.set(3, 88)).toEqual(true);
    });
  });

  describe('insert(idx, val)', () => {
    test('index out of bounds', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50);
      expect(list.insert(-4, 90)).toEqual(false);

      //
      // A list with two elements has indexes 0 and 1.
      // Index 2 is out of range.
      // Length is 2, though.
      //
      expect(list.insert(3, 80)).toEqual(false);
    });

    test('insert at index 0 (same as unshift)', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50);

      expect(list.insert(0, 80)).toEqual(true);
      expect(list.head.val).toEqual(80);
      expect(list.length).toEqual(3);
    });

    test('insert at index same as length (same as push)', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50);

      expect(list.insert(2, 80)).toEqual(true);
      expect(list.tail.val).toEqual(80);
      expect(list.length).toEqual(3);
    });

    test('insert somewhere in “the middle”', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50).push(10).push(30);
      //                     idx = 2

      expect(list.insert(2, 80)).toEqual(true);
      expect(list.length).toEqual(5);

      var inserted = list.get(2);
      expect(inserted.val).toEqual(80);
      expect(inserted.next.val).toEqual(10);
    });
  });

  describe('remove(idx)', () => {
    test('index out of bounds', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50);

      expect(list.remove(2)).toEqual(undefined);
      expect(list.length).toEqual(2);
    });

    test('index 0', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50);

      var removed = list.remove(0);

      expect(removed.val).toEqual(70);
      expect(list.length).toEqual(1);
    });

    test('index is same as length - 1', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(50).push(88).push(55);

      var removed = list.remove(3);

      expect(removed.val).toEqual(55);
      expect(list.length).toEqual(3);
    });

    test('somewhere “in the middle”', () => {
      var list = new DoublyLinkedList();
      list.push(77).push(33).push(88).push(55);

      var removed = list.remove(2);

      expect(removed.val).toEqual(88);
      expect(list.length).toEqual(3);
      expect(list.get(2).val).toEqual(55);
    });
  });
});
