import { PriorityQueue, Node } from './PriorityQueue.js';
// import { PriorityQueue, Node } from './pqcolt.js';

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

      queue.enqueue('watch', 5);
      queue.enqueue('food', 2);
      queue.enqueue('exercise', 3);
      queue.enqueue('water', 1);
      queue.enqueue('sleep', 0);

      expect(queue.vals).toEqual([
        new Node('sleep', 0),
        new Node('water', 1),
        new Node('exercise', 3),
        new Node('watch', 5),
        new Node('food', 2),
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

      queue.enqueue('watch', 5);
      queue.enqueue('food', 6);
      queue.enqueue('read', 2);
      queue.enqueue('sleep', 0);
      queue.enqueue('write', 8);
      queue.enqueue('exercise', 3);
      queue.enqueue('water', 1);

      expect(queue.dequeue()).toEqual(new Node('sleep', 0));
      expect(queue.dequeue()).toEqual(new Node('water', 1));
      expect(queue.dequeue()).toEqual(new Node('read', 2));
      expect(queue.dequeue()).toEqual(new Node('exercise', 3));
      expect(queue.dequeue()).toEqual(new Node('watch', 5));
      expect(queue.dequeue()).toEqual(new Node('food', 6));
      expect(queue.dequeue()).toEqual(new Node('write', 8));
    });
  });
});
