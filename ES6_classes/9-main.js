import { listOfStudents } from "./9-hoisting.js"; // Ensure correct import

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted);
