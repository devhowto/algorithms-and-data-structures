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

  describe('extract()', () => {
    test('empty heap', () => {
      var heap = new MaxBinaryHeap();

      expect(heap.extract()).toBe(null);
    });

    test('single-node heap', () => {
      var heap = new MaxBinaryHeap();
      heap.insert(100);

      expect(heap.extract()).toEqual(100);

      expect(heap.extract()).toBe(null);
    });

    test('three-node heap', () => {
      var heap = new MaxBinaryHeap();
      heap.insert(100);
      heap.insert(80);
      heap.insert(70);

      expect(heap.extract()).toEqual(100);
      expect(heap.extract()).toEqual(80);
      expect(heap.extract()).toEqual(70);
      expect(heap.extract()).toBe(null);
    });

    test('many-node heap', () => {
      var heap = new MaxBinaryHeap();
      heap.insert(100);
      heap.insert(250);
      heap.insert(500);
      heap.insert(400);
      heap.insert(300);
      heap.insert(280);
      heap.insert(600);

      expect(heap.extract()).toEqual(600);
      expect(heap.extract()).toEqual(500);
      expect(heap.extract()).toEqual(400);
      expect(heap.extract()).toEqual(300);
      expect(heap.extract()).toEqual(280);
      expect(heap.extract()).toEqual(250);
      expect(heap.extract()).toEqual(100);
      expect(heap.extract()).toBe(null);
    });
  });
});
