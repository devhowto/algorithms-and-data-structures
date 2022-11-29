import { assertEquals } from "/deps.ts";
import { sumToZero } from './sumToZero-v2.ts';

Deno.test('sumToZero()', async (t) => {
  await t.step('should return undefined when no pair sum to zero', () => {
    assertEquals(sumToZero([0]), undefined);
    assertEquals(sumToZero([-1, 2]), undefined);
    assertEquals(sumToZero([-2, -1, -3]), undefined);
    assertEquals(sumToZero([1, 2, -3, 4]), undefined);
  });

  //
  // Tests the case where the logic inadvertently compares the sum of
  // 0 + 0 === 0. It could happen if no other pair matches a sum of 0 but
  // we have a 0 in the array, and the indexes in loop are the same for
  // the left and right pointers.
  //
  // So, if for example we have the list [-1, 0, 2], and l = 1 and r = 1,
  // then ints[l] + ints[r] === 0, and we would INCORRECTLY return a pair
  // of [0, 0].
  //
  // We may have a pair [0, 0] if our input array actually contains two
  // zeroes. For example, [-1, 0, 0, 2, 3], then we would find a pair
  // [0, 0] which when summed is zero, and it would be correct.
  //
  await t.step('should return undefined for false positives', () => {
    assertEquals(sumToZero([-1, 0, 2]), undefined);
  });

  await t.step('should return the pair a pair sums to zero', () => {
    assertEquals(sumToZero([0, 0]), [0, 0]);
    assertEquals(sumToZero([1, -1]), [1, -1]);
    assertEquals(sumToZero([1, 2, -3, 4]), undefined);
  });
});
