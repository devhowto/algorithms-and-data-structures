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

    test('single-element list', () => {
      var list = new DoublyLinkedList();
      list.push(70);

      var popped = list.pop();

      expect(popped.val).toEqual(70);
      expect(popped.prev).toEqual(null);

      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);

      expect(list.length).toEqual(0);
    });

    test('two-or-more-element list', () => {
      var list = new DoublyLinkedList();
      list.push(70).push(30).push(50);

      var popped = list.pop();

      expect(popped.val).toEqual(50);
      expect(popped.prev).toEqual(null);

      expect(list.tail.val).toEqual(30);
      expect(list.length).toEqual(2);
    });
  });
});
