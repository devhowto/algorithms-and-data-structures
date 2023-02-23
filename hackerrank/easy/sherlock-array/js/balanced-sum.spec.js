import { balancedSum } from './balanced-sum-v1.js';

//
// • design tool
// • documentation
// • unit test
// • regression test
//

describe('balancedSum(xs)', () => {
  test('array with 1 element', () => {
    expect(balancedSum([7])).toEqual('YES');
  });
});
