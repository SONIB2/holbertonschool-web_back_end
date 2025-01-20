function getStudentIdsSum(students) {
  // Use reduce to sum the ids of all students
  return students.reduce((sum, student) => sum + student.id, 0);
}
export default getStudentIdsSum;
