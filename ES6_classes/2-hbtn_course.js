export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }
  get name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
  }
  get length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
  }
  get students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
