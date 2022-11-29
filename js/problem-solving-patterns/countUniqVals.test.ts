import { assertEquals } from "/deps.ts";
import { countUniqVals } from './countUniqVals-v1.ts';

Deno.test('countUniqVals()', async (t) => {
  await t.step('should return 0 with empty input', () => {
    assertEquals(countUniqVals([]), 0);
    assertEquals(countUniqVals(new Array(0)), 0);
  });

  await t.step('should return the correct count of unique values', () => {
    assertEquals(countUniqVals([0]), 1);
    assertEquals(countUniqVals([-7]), 1);
    assertEquals(countUniqVals([-3, -3, -3]), 1);
    assertEquals(countUniqVals([-3, -3, 0, 1, 1, 1, 1, 1]), 3);
    assertEquals(countUniqVals([-3, -2, -1, 0, 0, 1, 1]), 5);
    assertEquals(countUniqVals([-3, -2, -1, 0, 1]), 5);
  });
});
