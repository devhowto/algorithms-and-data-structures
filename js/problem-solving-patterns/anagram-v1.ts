
/**
 * Checks whether the two input strings are anagrams to one another.
 *
 * ASSUME: Input are simple anagrams, not containing spaces or other non
 * lowercase letters.
 *
 * @param s1
 * @param s2
 * @returns
 */
function isAnagram(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  if (s1.length === 0 && s2.length === 0) return true;

  const freqS1: Record<string, number> = {};

  for (const c of s1) {
    freqS1[c] = (freqS1[c] || 0) + 1;
  }

  for (const c of s2) {
    if (!freqS1[c]) return false; // <1>

    freqS1[c] -= 1;
  }

  return true;
}

export { isAnagram };
