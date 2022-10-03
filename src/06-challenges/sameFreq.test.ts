import { assertEquals } from "/deps.ts";
import { sameFreq } from "./sameFreq-v1.ts";

Deno.test("sameFreq()", async (t) => {
  await t.step("should return false when frequencies do not match", () => {
    assertEquals(sameFreq(12, 123), false);
    assertEquals(sameFreq(1, 2), false);
    assertEquals(sameFreq(123, 122), false);
  });

  await t.step("should return true when frequencies match", () => {
    assertEquals(sameFreq(1, 1), true);
    assertEquals(sameFreq(123, 123), true);
    assertEquals(sameFreq(322, 232), true);
    assertEquals(sameFreq(
      203010509999991,
      993020501099199,
    ), true);
  });
});
