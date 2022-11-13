//
// tags: sort merge-sort algorithm
//

/**
 * A helper function that merges two already sorted (and in the same
 * direction) arrays in an also sorted resulting array.
 *
 * @sig [Number] [Number] -> [Number]
 */
function merge(xs, ys) {
  var i = 0;
  var j = 0;
  var xsLen = xs.length;
  var ysLen = ys.length;
  var res = [];

  while (i < xsLen && j < ysLen) {
    if (xs[i] < ys[j]) res.push(xs[i++]);
    else res.push(ys[j++]);
  }

  if (i === xsLen) res.push(...ys.slice(j));
  if (j === ysLen) res.push(...xs.slice(i));

  return res;
}

//
// Note we are doing xs[i++] like real hackers often do in C 🤣. We
// could just do something like this instead (in two lines):
//
//   res.push(xs[i]);
//   ++i;
//
// Both approaches are fine.
//
// The last two ifs handle the case for when there are still elements
// remaining in one of the arrays. If either j or i have reached the
// length of their respective array, maybe the other array has remaining
// elements.
//

module.exports = {
  merge,
};
