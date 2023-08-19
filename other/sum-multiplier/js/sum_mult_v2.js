const log = console.log.bind(console);

const max = Math.max.bind(Math);

function sumMult(xs) {
  let total = xs[0],
       max1 = xs[0],
       max2 = xs[0];

  for (let i = 1; i < xs.length; ++i) {
    let cur = xs[i];
    total += cur;

    if (cur < max1) continue;

    max2 = max1;
    max1 = cur;
  }

  log({ max1, max2 });
  return max1 * max2 >= total;
}

log(sumMult([2, 2, 2, 2, 4, 1]));      // false
log(sumMult([1, 1, 2, 10, 3, 1, 12])); // true
