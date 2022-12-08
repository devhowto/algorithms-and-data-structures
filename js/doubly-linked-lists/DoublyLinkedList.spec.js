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
  test('can construct an empy list', () => {
    var list = new DoublyLinkedList();
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });


});
