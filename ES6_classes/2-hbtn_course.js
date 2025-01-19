export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array');
    }
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    this._name = newName
  }
  get length() {
    return this._length;
  }
  set length(length) {
    if (typeof length !== 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }
  get students() {
    return this._students;
  }
  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new Error('Students must be an array');
    }
    this._students = newStudents;
  }
}
