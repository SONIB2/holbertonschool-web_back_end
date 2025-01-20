function updateStudentGradeByCity(students, city, newGrades) {
  return students
  // Filter students by the specified city
  .filter(student => student.location === city)
  // Map the filtered students to include their updated grades
  .map(student => {
  // Find the grade for the student in newGrades, if any
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
  // If a grade is found, use it; otherwise, set grade to 'N/A'
    student.grade = gradeObj ? gradeObj.grade : 'N/A';
  return student;
    });
}
export default updateStudentGradeByCity;
