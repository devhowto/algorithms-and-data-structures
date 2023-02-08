import { missingNums } from './missing-numbers-v1.js';

//
// - design tool
// - documentation
// - testing
// - regression testing
//

describe('missingNums(arr, brr)', () => {
  describe('when the two inputs are empty', () => {
    it('should return an empty array', () => {
      expect(missingNums([], [])).toEqual([]);
    });
  });

  describe('when the two arrays have the same elements', () => {
    it('should return an empty array', () => {
      var arr = [1, 2, 3];
      var brr = [1, 2, 3];

      expect(missingNums(arr, brr)).toEqual([]);

      var arr2 = [1, 3, 2];
      var brr2 = [2, 1, 3];

      expect(missingNums(arr2, brr2)).toEqual([]);
    });
  });
});

