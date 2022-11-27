import {
  Node,
  SinglyLinkedList,
} from './SinglyLinkedList.js';

describe('Node', () => {
  test('can instantiate a Node', () => {
    var node = new Node(7);
    expect(node.val).toEqual(7);
    expect(node.next).toEqual(null);
  });
});

describe('SinglyLinkedList', () => {
  test('can instantiate an empty list', () => {
    var list = new SinglyLinkedList();
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.next).toEqual(null);
    expect(list.length).toBe(0);
  });

  test('can push a node to an empty list', () => {
    var list = new SinglyLinkedList();
    list.push(7);

    expect(list.head.val).toEqual(7);
    expect(list.tail.val).toEqual(7);
    expect(list.length).toEqual(1);
    expect(list.tail.next).toEqual(null);
    expect(list.head.next).toEqual(null);
  });
});
