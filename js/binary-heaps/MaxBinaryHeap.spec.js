import { MaxBinaryHeap } from './MaxBinaryHeap.js';

describe('MaxBinaryHeap class', () => {
  describe('insert()', () => {
    test('empty heap', () => {
      var heap = new MaxBinaryHeap();

      heap.insert(100);

      expect(heap.vals).toEqual([100]);
    });

    test('smaller into single-element heap', () => {
      var heap = new MaxBinaryHeap();

      heap.insert(100);
      heap.insert(80);

      expect(heap.vals).toEqual([100, 80]);
    });

    test('smaller into two-element heap', () => {
      var heap = new MaxBinaryHeap();

      heap.insert(100);
      heap.insert(80);
      heap.insert(70);

      expect(heap.vals).toEqual([100, 80, 70]);
    });

    test('smaller into larger heap', () => {
      var heap = new MaxBinaryHeap();

      heap.insert(100);
      heap.insert(80);
      heap.insert(70);
      heap.insert(85);

      expect(heap.vals).toEqual([100, 85, 70, 80]);
    });

    test('larger into single-element heap', () => {
      var heap = new MaxBinaryHeap();

      heap.insert(100);
      heap.insert(150);

      expect(heap.vals).toEqual([150, 100]);
    });

    test('larger into two-element heap', () => {
      var heap = new MaxBinaryHeap();

      heap.insert(150);
      heap.insert(200);
      heap.insert(300);

      expect(heap.vals).toEqual([300, 150, 200]);
    });
  });
});
