import { assertEquals } from "/deps.ts";
import { maxSubArrSum } from './maxSubArrSum-v2.ts';

Deno.test("maxSubArrSum()", async (t) => {
  await t.step("should return the correct sum", () => {
    assertEquals(maxSubArrSum([0], 1), 0);
    assertEquals(maxSubArrSum([1, 2, 4, 2, 3], 2), 4 + 2);

    assertEquals(maxSubArrSum([1, 2, 3, -4, 7], 2), 2 + 3);

    assertEquals(
      maxSubArrSum(
        [4, 2, 1, 6, 2], 4),
        4 + 2 + 1 + 6
    ); // 13

    assertEquals(
      maxSubArrSum([-2, -4, -1, 0, 0], 3),
     -1 + 0 + 0
    ); // -1

    assertEquals(
      maxSubArrSum([-2, -1, -1, -1, -2, -2, -2, -5], 3),
      -1 + -1 + -1
    );
  });
});
