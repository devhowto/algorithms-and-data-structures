/**
 * The classic fizz buzz problem.
 *
 * @sig [Int] -> String
 * @param {number[]} xs
 * @returns {string}
 */
function fizzBuzz(xs) {
  var res = xs.reduce(function reducer(acc, x) {
    if (x % 3 === 0 && x % 5 === 0)
      return [...acc, 'fizz', 'buzz'];

    if (x % 3 === 0) return [...acc, 'fizz'];
    if (x % 5 === 0) return [...acc, 'buzz'];

    return acc;
  }, []);

  return res.join(' ');
}

export { fizzBuzz };
