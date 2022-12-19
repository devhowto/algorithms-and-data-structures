import { Queue } from './Queue.js';

describe('Queue class', () => {
  test('can construct empty queue', () => {
    var queue = new Queue();

    expect(queue.first).toEqual(null);
    expect(queue.last).toEqual(null);
    expect(queue.size).toEqual(0);
  });

  test('can enqueue(val) to empty queue', () => {
    var queue = new Queue();
    var size = queue.enqueue(70);

    expect(size).toEqual(1);
    expect(queue.size).toEqual(1);
    expect(queue.first.val).toEqual(70);
    expect(queue.last.val).toEqual(70);
  });

  test('can enqueue(val) to non-empty queue', () => {
    var queue = new Queue();
    queue.enqueue(70);
    queue.enqueue(30);

    var size = queue.enqueue(50);

    expect(size).toEqual(3);
    expect(queue.size).toEqual(3);

    expect(queue.first.val).toEqual(70);
    expect(queue.last.val).toEqual(50);
  });

  test('dequeue() from empty queue', () => {
    var queue = new Queue();

    var dequeued = queue.dequeue();

    expect(dequeued).toEqual(null);
    expect(queue.size).toEqual(0);
  });

  test('dequeue() from single-node queue', () => {
    var queue = new Queue();
    queue.enqueue(70);

    var dequeued = queue.dequeue();

    expect(dequeued.val).toEqual(70);
    expect(queue.size).toEqual(0);
  });

  test('dequeue() from two-or-more-node queue', () => {
    var queue = new Queue();
    queue.enqueue(70);
    queue.enqueue(30);
    queue.enqueue(50);

    var dequeued = queue.dequeue();

    expect(dequeued.val).toEqual(70);
    expect(dequeued.next).toEqual(null);

    expect(queue.first.val).toEqual(30);
    expect(queue.last.val).toEqual(50);
    expect(queue.size).toEqual(2);
  });
});
