import { assertEquals } from "/deps.ts";
import { isAnagram } from './anagram-v1.ts';

Deno.test('isAnagram()', async (t) => {
  await t.step('should return false with inputs of different lengths', () => {
    assertEquals(isAnagram('', 'z'), false);
    assertEquals(isAnagram('listen', 'silently'), false);
  });

  await t.step('should return true with empty string inputs', () => {
    assertEquals(isAnagram('', ''), true);
    assertEquals(
      isAnagram(
        new String('') as string,
        new String('') as string
      ), true);
  });

  await t.step('should return true for single word, non space anagrams', () => {
    assertEquals(isAnagram('listen', 'silent'), true);
  });
});
