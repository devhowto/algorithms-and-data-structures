import { assertEquals } from "/deps.ts";
import { power } from "./power-v2.ts";

Deno.test("power()", async (t) => {
  await t.step("should return 1 when raised to the 0th power", () => {
    assertEquals(power(0, 0), 1);
    assertEquals(power(3e5, 0), 1);
  });

  await t.step("should return n when raised to 1st power", () => {
    assertEquals(power(0, 1), 0);
    assertEquals(power(1, 1), 1);
    assertEquals(power(3e2, 1), 3e2);
  });

  await t.step("should raise n to the m power", () => {
    assertEquals(power(3, 4), 3 * 3 * 3 * 3); // 81
    assertEquals(power(2, 5), 2 * 2 * 2 * 2 * 2); // 32
    assertEquals(power(2, 128), 2 ** 128);
    assertEquals(power(-2, 32), (-2) ** 32);
  });
});
