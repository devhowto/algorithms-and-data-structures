import { assertEquals } from "/deps.ts";
import { avgPair } from "./avgPair-v1.ts";

Deno.test("avgPair()", async (t) => {
  await t.step("should find no average pair and return false", () => {
    assertEquals(avgPair([], 3), false);
    assertEquals(avgPair([1, 2, 3, 4, 6, 7], 1), false);
    assertEquals(avgPair([1, 2, 3, 4, 6, 7], 5.3), false);
    assertEquals(avgPair([-1, 0, 3, 4, 5, 6], 4.1), false);
  });

  await t.step("should find average pair and return true", () => {
    assertEquals(avgPair([1, 2], 1.5), true);
    assertEquals(avgPair([1, 2, 3], 2.5), true);
    assertEquals(avgPair([-2, -1, 0, 1, 2], -1.5), true);
    assertEquals(
      avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8),
      true
    );
  });
});
