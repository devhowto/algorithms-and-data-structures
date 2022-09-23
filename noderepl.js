//
// Custom node repl script. Start it with:
//
//     $ node ./noderepl.js
//
// Exit with `Ctrl+D` or `.exit`.
//

import repl from 'repl';
import {
  statSync,
  readFileSync,
  appendFileSync,
} from 'fs';

[
  'log',
  'log10',
  'abs',
  'floor',
  'ceil',
  'round',
  'trunc',
  'pow',
].forEach(function addToGlobal (fn) {
  global[fn] = Math[fn].bind(Math);
});

global.log = console.log.bind(console);

//
// Save repl server object for later use.
//
const server = repl.start();

const HISTFILE = './.node_repl_history';

statSync(HISTFILE);

//
// Read history file into repl server history.
//
readFileSync(HISTFILE, 'UTF-8')
  .split('\n')
  .reverse()
  .filter(line => line.trim())
  .map(line => server.history.push(line))

//
// There must be a trailing '\n' so the next time we add
// lines to the history we do not get the last command of
// the previous sessions on the same line as the first command
// of the next session.
//
server.on('exit', function onReplExit() {
  appendFileSync(HISTFILE, server.lines.join('\n') + '\n');
  process.exit();
});
