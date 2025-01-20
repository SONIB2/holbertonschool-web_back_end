function updateStudentGradeByCity(students, city, newGrades) {
  return students
  // Filter students by the specified city
    .filter((student) => student.location === city)
  // Map the filtered students to include their updated grades
    .map((student) => {
      // Find the grade for the student in newGrades, if any
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student, // Spread the original student object
        grade: gradeObj ? gradeObj.grade : 'N/A', // Assign the grade or 'N/A'
      };
    });
}
export default updateStudentGradeByCity;
