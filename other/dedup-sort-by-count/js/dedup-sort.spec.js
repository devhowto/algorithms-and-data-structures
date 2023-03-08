import { dedupSort } from './dedup-sort-v1.js';

describe('dedupSort(xs)', () => {
  describe('when the input is an empty array', () => {
    it('should return an empty array', () => {
      expect(dedupSort([])).toEqual([]);
    });
  });

  describe('when the input is a single-element array', () => {
    it('should return an array with that number', () => {
      expect(dedupSort([7])).toEqual([7]);
    });
  });

  describe('when the input contains multiple same element', () => {
    it('should return an array with that element', () => {
      expect(dedupSort([7, 7, 7, 7, 7])).toEqual([7]);
    });
  });
});
