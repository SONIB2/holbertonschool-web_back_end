import { listOfStudents } from './9-hoisting.js'; // Adjust path if necessary

test("listOfStudents has the correct length", () => {
  expect(listOfStudents.length).toBe(5);
});
