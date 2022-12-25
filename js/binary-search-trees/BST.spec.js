import {
  Node,
  BST,
} from './BST-v2.js';

describe('Node', () => {
  test('can create a Node', () => {
    var node = new Node(100);
    expect(node.val).toEqual(100);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });
});

describe('BST()', () => {
  test('create an empty BST', () => {
    var bst = new BST();

    expect(bst.root).toBe(null);
  });

  describe('insert()', () => {
    test('to empty BST', () => {
      var bst = new BST();
      var res = bst.insert(100);

      expect(res === bst).toBe(true);
      expect(bst.root.val).toEqual(100);
      expect(bst.root.left).toBe(null);
      expect(bst.root.right).toBe(null);
    });

    // In this implementation, we chose to ignore
    // duplicate nodes (simply do nothing).
    test('duplicate node', () => {
      var bst = new BST();
      bst.insert(100);
      bst.insert(80);

      var res = bst.insert(80);

      expect(res === bst).toBe(true);
      expect(bst.root.val).toEqual(100);
      expect(bst.root.left.val).toEqual(80);
      expect(bst.root.left.left).toBe(null);
      expect(bst.root.right).toBe(null);
    })

    test('to the left of single node BST', () => {
      var bst = new BST().insert(100);

      var res = bst.insert(40);

      expect(res === bst).toBe(true);
      expect(bst.root.val).toEqual(100);
      expect(bst.root.left.val).toEqual(40);
      expect(bst.root.right).toBe(null);
    });

    test('to the right of single node BST', () => {
      var bst = new BST().insert(100);

      var res = bst.insert(70);

      expect(res === bst).toBe(true);
      expect(bst.root.val).toEqual(100);
      expect(bst.root.left.val).toEqual(70);
      expect(bst.root.right).toBe(null);
    });

    test('to the left of the left', () => {
      var bst = new BST().insert(100);

      bst.insert(40);

      var res = bst.insert(20);

      expect(res === bst).toBe(true);
      expect(bst.root.val).toEqual(100);
      expect(bst.root.left.val).toEqual(40);
      expect(bst.root.left.left.val).toEqual(20);
      expect(bst.root.right).toBe(null);
    });

    test('to the right of the right', () => {
      var bst = new BST().insert(100);

      bst.insert(150);

      var res = bst.insert(170);

      expect(res === bst).toBe(true);
      expect(bst.root.val).toEqual(100);
      expect(bst.root.right.val).toEqual(150);
      expect(bst.root.right.right.val).toEqual(170);
      expect(bst.root.left).toBe(null);
    });
  });
});

