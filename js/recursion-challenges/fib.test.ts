import { assertEquals } from "/deps.ts";
import { fib } from "./fib-v2.ts";

Deno.test("fib()", async (t) => {
  await t.step("should compute the 1st term of fib seq (1)", () => {
    // 1 → 1
    assertEquals(fib(1), 1);
  });

  await t.step("should compute the 2nd term of fib seq (1)", () => {
    // 1 → 1
    // 1 1 → 1
    assertEquals(fib(2), 1);
  });

  await t.step("should compute the 3nd term of fib seq (2)", () => {
    // ø → 1
    // ø 1 → 1
    // ø 1 1 → 2
    //
    assertEquals(fib(3), 2);
  });

  await t.step("should compute the 4th number of the fib seq (3)", () => {
    // ø → 1
    // ø 1 → 1
    // ø 1 1 → 2
    // ø 1 1 2 → 3
   assertEquals(fib(4), 3);
  });

  await t.step("should compute the 5th number of the fib seq (5)", () => {
    // ø → 1
    // ø 1 → 1
    // ø 1 1 → 2
    // ø 1 1 2 → 3
    // ø 1 1 2 3 → 5
   assertEquals(fib(4), 3);
  });

  await t.step("should compute the 6th number of the fib seq (8)", () => {
    // ø → 1
    // ø 1 → 1
    // ø 1 1 → 2
    // ø 1 1 2 → 3
    // ø 1 1 2 3 → 5
    // ø 1 1 2 3 5 → 8
   assertEquals(fib(4), 3);
  });

  await t.step("should compute the 35th term of the fib seq (9227465)", () => {
    assertEquals(fib(35), 9227465);
  });
});
