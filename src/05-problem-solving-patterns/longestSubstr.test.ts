import { assertEquals } from "/deps.ts";
import { findLongestSubstr } from "./longestSubstr-v2.ts";

Deno.test("findLongestSubstr()", async (t) => {
  await t.step("when input is empty string", async (t) => {
    await t.step("should return 0", () => {
      assertEquals(findLongestSubstr(""), 0);
    });
  });

  await t.step("when input contains no distinct chars", async (t) => {
    await t.step("should return 1", () => {
      assertEquals(findLongestSubstr("bbbbbb"), 1);
    });
  });

  await t.step("when input contains substring with distinct chars", async (t) => {
    await t.step("should return the length of the substring", () => {
      assertEquals(findLongestSubstr("xyxabcdyx"), 6);
      assertEquals(findLongestSubstr("rithmschool"), 7);
      assertEquals(findLongestSubstr("thisisawesome"), 6);
      assertEquals(findLongestSubstr("thecatinthehat"), 7);
      assertEquals(findLongestSubstr("longestsubstring"), 8);
      assertEquals(findLongestSubstr("thisishowwedoit"), 6);
    });
  });
});
