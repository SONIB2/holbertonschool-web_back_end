// 0-constants.js

export function taskFirst() {
    const task = 'I prefer const when I can.';  // Use const as the value is not reassigned
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let';  // Use let as the value is reassigned/modified
    combination += getLast();
  
    return combination;
  }  