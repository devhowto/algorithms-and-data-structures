import { assertEquals } from "/deps.ts";
import { minSubArrLen } from "./minSubArrLen-v2.ts";

Deno.test("minSubArrLen()", async (t) => {
  await t.step("when the input array is empty", async (t) => {
    await t.step("should return 0", () => {
      assertEquals(minSubArrLen([], 1), 0);
      //
      // An empty array can"t possibly sum to 1.
      //
    });
  });

  await t.step("when the entire array summed is not >= n", async (t) => {
    await t.step("should return 0", () => {
      assertEquals(
        minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95),
        0
      );
      //
      // Even adding all the elements doesn't amount to 95.
      //
    });
  });

  await t.step("when a single element >= n", async (t) => {
    await t.step("should return 1", () => {
      assertEquals(minSubArrLen([1, 13, 7], 13), 1);
      //
      // 1 Because 13 >= 13.
      //

      assertEquals(
        minSubArrLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52),
        1
      );

      // 1 because 62 >= 52.
      //
    });
  });

  await t.step("when 2 elements summed >= n", async (t) => {
    await t.step("should return 2", () => {
      assertEquals(
        minSubArrLen([2, 3, 1, 2, 4, 3], 7),
        2
      );
      // 2 because [4, 3] is the smallest subarray that produces 7
      // when summed.

      assertEquals(minSubArrLen([2, 1, 6, 5, 4], 9), 2);
      // 2 because [5, 4] is the smallest subarray.

      minSubArrLen([4, 3, 3, 8, 1, 2, 3], 11);
      // 2 because 3 + 8 is 11.
    });
  });

  await t.step("when all the elements are required", async (t) => {
    await t.step("should return the length of the input array", () => {
      const nums3 = [1, 2, 3];
      assertEquals(minSubArrLen(nums3, 6), nums3.length);

      const nums9 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      assertEquals(minSubArrLen(nums9, 450), nums9.length);
    });
  });

  await t.step("should handle random subarray lengths required", (t) => {
    minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
    // 3

    minSubArrLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
    // 5
  });
});
