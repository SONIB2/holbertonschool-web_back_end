export default function taskBlock(trueOrFalse) {
    let task = false; // Block-scoped variable
    let task2 = true; // Block-scoped variable
  
    if (trueOrFalse) {
      let task = true; // New block-scoped variable (independent of the outer one)
      let task2 = false; // New block-scoped variable (independent of the outer one)
    }
  
    return [task, task2];
  }  