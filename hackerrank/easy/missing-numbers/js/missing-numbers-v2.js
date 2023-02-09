/**
 * Returns a hash map of the frequencies of the values in `xs`.
 *
 * @param {number[]} xs
 * @returns {{ [key: string]: number }}
 */
function countFreqs(xs) {
  return xs.reduce(function reducer(freqs, x) {
    freqs[x] = freqs[x] + 1 || 1;
    return freqs;
  }, {});
}

/**
 * Finds numbers that are present in `brr` but missing in `arr`.
 *
 * @param {number[]} arr
 * @param {number[]} brr
 * @returns {number[]} The array of the missing numbers (the
 *   difference).
 */
function missingNums(arr, brr) {
  var freqsArr,
      freqsBrr,
      i,
      n;

  freqsArr = countFreqs(arr);
  freqsBrr = countFreqs(brr);

  return Object.keys(freqsBrr).reduce((missing, key) => {
    if (freqsBrr[key] === freqsArr[key])
      return missing;

    missing.push(Number(key));

    return missing;
  }, []);
}

export { missingNums };
