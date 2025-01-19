import { listOfStudents } from './9-hoisting.js'; // Correct import

test("listOfStudents has the correct length", () => {
  expect(listOfStudents.length).toBe(5); // Check if the length is 5
});
