import { listOfStudents } from './9-hoisting.js';

console.log(listOfStudents); // Check what is being imported

test("listOfStudents has the correct length", () => {
  expect(listOfStudents.length).toBe(5);
});
