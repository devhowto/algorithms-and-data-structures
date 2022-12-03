import { Node, SinglyLinkedList } from "./SinglyLinkedList.js";

describe("Node", () => {
  test("can instantiate a Node", () => {
    var node = new Node(7);
    expect(node.val).toEqual(7);
    expect(node.next).toEqual(null);
  });
});

describe("SinglyLinkedList", () => {
  describe("constructor", () => {
    test("can instantiate an empty list", () => {
      var list = new SinglyLinkedList();
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
      expect(list.length).toBe(0);
    });
  });

  describe("push()", () => {
    test("can push a node to an empty list", () => {
      var list = new SinglyLinkedList();
      list.push(7);

      expect(list.head.val).toEqual(7);
      expect(list.tail.val).toEqual(7);
      expect(list.length).toEqual(1);
      expect(list.tail.next).toEqual(null);
      expect(list.head.next).toEqual(null);
    });

    test('can push a node to a non-empty list', () => {
      var list = new SinglyLinkedList();
      list.push(7);
      // Now the list is not empty anymore.

      list.push(3);

      expect(list.head.val).toEqual(7);
      expect(list.tail.val).toEqual(3);
    });
  });

  describe("pop()", () => {
    test('pop from empty list', () => {
      var list = new SinglyLinkedList();

      var popped = list.pop();
      expect(popped).toEqual(undefined);
      expect(list.length).toEqual(0);
    });

    test('pop from a single-node list', () => {
      var list = new SinglyLinkedList();
      list.push(7);

      expect(list.head.val).toEqual(7);
      expect(list.tail.val).toEqual(7);

      var popped = list.pop();
      expect(popped.val).toEqual(7);
      expect(list.length).toEqual(0);
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    });

    test("pop from two-or-more-node list", () => {
      var list = new SinglyLinkedList();
      list.push(7).push(3).push(5);

      expect(list.tail.val).toEqual(5);

      var popped = list.pop();
      expect(popped.val).toEqual(5);

      expect(list.tail.val).toEqual(3);
    });
  });

  describe('shift()', () => {
    test('empty list', () => {
      var list = new SinglyLinkedList();
      var shifted = list.shift();
      expect(shifted).toEqual(undefined);
    });

    test('list with single node', () => {
      var list = new SinglyLinkedList();
      list.push(7);

      var shifted = list.shift();

      expect(shifted.val).toEqual(7);
      expect(list.length).toEqual(0);
      expect(list.head).toEqual(null)
      expect(list.tail).toEqual(null)
    });
  });

  describe('unshift(val)', () => {
    test('empty list', () => {
      var list = new SinglyLinkedList();
      list.unshift(7);

      expect(list.length).toEqual(1);
      expect(list.head.val).toEqual(7);
      expect(list.tail.val).toEqual(7);
    });

    test('single-node list', () => {
      var list = new SinglyLinkedList();
      list.push(7);

      list.unshift(3);

      expect(list.length).toEqual(2);
      expect(list.head.val).toEqual(3)
      expect(list.head.next.val).toEqual(7);
    });

    test('two-or-more-node list', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(3).push(5);

      expect(list.length).toEqual(3);
      expect(list.head.val).toEqual(7);
      expect(list.tail.val).toEqual(5);

      list.unshift(99);

      expect(list.length).toEqual(4);
      expect(list.head.val).toEqual(99);
      expect(list.head.next.val).toEqual(7);
    });
  });

  describe('get(idx)', () => {
    test('empty list', () => {
      var list = new SinglyLinkedList();
      var node = list.get(5);
      expect(node).toEqual(null);
    });

    test('negative index', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(5);
      var node = list.get(-3);
      expect(node).toEqual(null);
    });

    test('index >= list.length', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(5);

      //
      // A list with 2 nodes contains index 0 and 1.
      //
      var node = list.get(2);

      expect(node).toEqual(null);
    });

    test('get 0th index', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(5);

      //
      // A list with 2 nodes contains index 0 and 1.
      //
      var node = list.get(0);

      expect(node.val).toEqual(7);
    });

    test('get 3rd index', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(5).push(99).push(101).push(-77).push(1e4);
      //                                 3rd

      var node = list.get(3);

      expect(node.val).toEqual(101);
    });
  });

  describe('set(idx, val)', () => {
    test('empty list', () => {
      var list = new SinglyLinkedList();
      expect(list.set(0, 7)).toEqual(false);
    });

    test('negative index', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(5);
      expect(list.set(-3, 7)).toEqual(false);
    });

    test('index >= list.length', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(5);

      //
      // A list with 2 nodes contains index 0 and 1.
      //
      expect(list.set(2, 5)).toEqual(false);
    });

    test('valid existing node index', () => {
      var list = new SinglyLinkedList();
      list.push(7).push(5).push(99).push(101).push(-77).push(1e4);
      //                                 3rd
      expect(list.set(3, 88)).toEqual(true);
    });
  });
});
