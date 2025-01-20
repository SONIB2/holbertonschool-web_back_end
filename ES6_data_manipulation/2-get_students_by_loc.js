function getStudentsByLocation(students, city) {
  // Use filter to return students located in the specified city
  return students.filter((student) => student.location === city);
}
export default getStudentsByLocation;
