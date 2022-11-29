import { assertEquals } from "/deps.ts";
import { fact } from './factorial-v1.ts';

Deno.test('fact()', async (t) => {
  await t.step('should return 1 when input is 1', () => {
    assertEquals(fact(1), 1);
  });

  await t.step('should return 2 when input is 2', () => {
    assertEquals(fact(2), 2 * 1);
  });

  await t.step('should return the factorial of 3', () => {
    assertEquals(fact(3), 3 * 2 * 1);
  });

  await t.step('should return the factorial of 5', () => {
    assertEquals(fact(5), 5 * 4 * 3 * 2 * 1);
  });
});
