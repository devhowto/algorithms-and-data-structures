//
// NOTE: This is a work in progress.
//

const log = console.log.bind(console);

function int(val) {
  return Number.parseInt(val, 10);
}

function str(val) {
  return String(val);
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
function misDig(expr) {
  const [a, op, b, _, r] = expr.split(' ');
  let num;
  let idx;

  if (r.includes('x')) {
    num = opTbl[op](int(a), int(b));
    idx = r.indexOf('x');
  } else if (b.includes('x') && ['-', '/'].includes(op)) {
    num = opTbl[op](int(a), int(r));
    idx = b.indexOf('x');
  } else if (b.includes('x')) {
    num = opTbl[invOpTbl[op]](int(r), int(a));
    idx = b.indexOf('x');
  } else {
    num = opTbl[invOpTbl[op]](int(r), int(b));
    idx = a.indexOf('x');
  }

  return int(str(num)[idx]);
}

export { misDig };
