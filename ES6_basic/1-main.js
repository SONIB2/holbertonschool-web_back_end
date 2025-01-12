import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));  // Should output: [ false, true ]
console.log(taskBlock(false)); // Should output: [ false, true ]
