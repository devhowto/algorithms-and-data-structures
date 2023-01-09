import { PriorityQueue, Node } from './PriorityQueue.js';

describe('Node class', () => {
  test('can create a Node', () => {
    var node = new Node('water', 1);
    expect(node.val).toEqual('water');
    expect(node.priority).toEqual(1);
  });
});

describe('PriorityQueue class', () => {
  test('can create an empty queue', () => {
    var queue = new PriorityQueue();
    expect(queue.vals).toEqual([]);
  });

  describe('enqueue(val, priority)', () => {
    test('empty queue', () => {
      var queue = new PriorityQueue();

      queue.enqueue('water', 1);

      expect(queue.vals).toEqual([new Node('water', 1)]);
    });

    test('non-empty queue', () => {
      var queue = new PriorityQueue();

      queue.enqueue('watch', 9);
      queue.enqueue('read', 3);
      queue.enqueue('write', 7)
      queue.enqueue('exercise', 4);
      queue.enqueue('work', 6);
      queue.enqueue('study', 5)
      queue.enqueue('food', 2);
      queue.enqueue('water', 1);
      queue.enqueue('sleep', 0);

      expect(queue.vals).toEqual([
        new Node('sleep', 0),
        new Node('water', 1),
        new Node('read', 3),
        new Node('food', 2),
        new Node('work', 6),
        new Node('write', 7),
        new Node('study', 5),
        new Node('watch', 9),
        new Node('exercise', 4),
      ]);
    });
  });

  describe('dequeue()', () => {
    test('empty queue', () => {
      var queue = new PriorityQueue();
      expect(queue.dequeue()).toBe(null);
    });

    test('non-empty queue', () => {
      var queue = new PriorityQueue();

      queue.enqueue('watch', 9);
      queue.enqueue('read', 3);
      queue.enqueue('write', 7)
      queue.enqueue('exercise', 4);
      queue.enqueue('work', 6);
      queue.enqueue('study', 5)
      queue.enqueue('food', 2);
      queue.enqueue('water', 1);
      queue.enqueue('sleep', 0);

      expect(queue.dequeue()).toEqual(new Node('sleep', 0));
      expect(queue.dequeue()).toEqual(new Node('water', 1));
      expect(queue.dequeue()).toEqual(new Node('food', 2));
      expect(queue.dequeue()).toEqual(new Node('read', 3));
      expect(queue.dequeue()).toEqual(new Node('exercise', 4));
      expect(queue.dequeue()).toEqual(new Node('study', 5));
      expect(queue.dequeue()).toEqual(new Node('work', 6));
      expect(queue.dequeue()).toEqual(new Node('write', 7));
      expect(queue.dequeue()).toEqual(new Node('watch', 9));
    });
  });
});
