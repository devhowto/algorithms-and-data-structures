//
// NOTE: This is a work in progress.
//

const log = console.log.bind(console);

function int(val) {
  return Number.parseInt(val, 10);
}

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => x / y;

const opTbl = {
  '+': add,
  '-': sub,
  '*': mult,
  '/': div,
};

const invOpTbl = {
  '+': '-',
  '-': '+',
  '*': '/',
  '/': '*',
};

/**
 * @param {string} str
 */
function misDig(str) {
  const [a, op, b, _, r] = str.split(' ');
  log({ a, op, b, r });
  let num;

  if (r.includes('x')) {
    num = opTbl[op](int(a), int(b));
    return num.toString()[r.indexOf('x')];
  } else if (a.includes('x')) {
    num = opTbl[invOpTbl[op]](int(r), int(b));
    return num.toString()[a.indexOf('x')];
  } else {
    num = opTbl[invOpTbl[op]](int(r), int(a));
    return num.toString()[b.indexOf('x')];
  }
}

// log(misDig('2 * 3 = x')); // 5
// log(misDig('x + 3 = 5')); // 2
// log(misDig('2 + x = 5')); // 3

// log(misDig('12x + 2 = 125')); // 3
// //            3
// log(misDig('1x3 + 2 = 125')); // 3
// //           2
// log(misDig('x23 + 2 = 125')); // 3
// //          1
//
// log(misDig('5 - 2 = x')); // 3
// log(misDig('x - 2 = 3')); // 5
log(misDig('5 - x = 3')); // 2

/*
5 - x  = 3
5 - 3  = x
*/
