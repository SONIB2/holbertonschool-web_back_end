function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  // Add parentheses around the arrow function argument
  return students.map((student) => student.id);
}
  export default getListStudentIds;
