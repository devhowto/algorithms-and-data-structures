import { assertEquals } from "/deps.ts";
import { isSubSeq } from "./isSubSeq-v2.ts";

Deno.test("isSubSeq()", async (t) => {
  await t.step("should return true", () => {
    assertEquals(isSubSeq("dc", "abcd"), false);
    assertEquals(isSubSeq("abc", "acb"), false);
    assertEquals(isSubSeq("abcde", "abcd"), false);
    assertEquals(isSubSeq("may the force", "be wawait t.steph you"), false);
  });

  await t.step("should return true", () => {
    assertEquals(
      isSubSeq("force", "may the force be wawait t.steph you!"),
      true
    );
    assertEquals(isSubSeq("ana", "banana"), true);
    assertEquals(isSubSeq("abc", "abracadabra"), true);
    assertEquals(isSubSeq("sing", "sting"), true);
  });
});
