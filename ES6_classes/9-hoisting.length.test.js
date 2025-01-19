import { listOfStudents } from './9-hoisting.js';

console.log('Imported listOfStudents:', listOfStudents); // Debug log

test("listOfStudents has the correct length", () => {
  expect(listOfStudents.length).toBe(5);
});
