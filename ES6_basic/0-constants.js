// 0-constants.js

// Use 'const' since 'task' value should not be reassigned
export function taskFirst() {
    const task = 'I prefer const when I can.';  // Use const here
    return task;
  }
  
  // Function to return the string ' is okay'
  export function getLast() {
    return ' is okay';
  }
  
  // Use 'let' since 'combination' value will be reassigned
  export function taskNext() {
    let combination = 'But sometimes let';  // Use let here
    combination += getLast();  // Reassign combination
  
    return combination;
  }
  