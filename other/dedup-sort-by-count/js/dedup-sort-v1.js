//
// tags: sort, dedup, array, ramda, integer
//

import {
  compose,
  countBy,
  descend,
  identity,
  map,
  prop,
  sort,
  toPairs,
} from 'ramda';


/**
 * Deduplicates and sorts an array of integers by count, descending.
 *
 * @param {Array<number>} xs
 * @returns {Array<number>}
 */
function dedupSort(xs) {
  return compose(
    map(compose(Number, prop(0))),
    sort(descend(prop(1))),
    toPairs,
    countBy(identity),
  )(xs);
}

export { dedupSort };

//
// NOTES
// =====
//
// We could replace `prop(0)` with `head`, but as we also use `prop(1)`
// maybe importing `head` too would be just meh... Let's stick with
// `prop`.
//
