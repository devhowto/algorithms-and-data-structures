/** @type {import('jest').Config} */
var config = {
  bail: 1,
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'js/**/*.js',
    // 'js/priority-queues/PriorityQueue.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/js/jslib/',
  ],
};

export default config;
