/**
 * Returns an array of students
 * @returns {Array} Array of students objects.
 */
function getListStudents() {
  /**
   * Represents a student
   * @typedef {Object} Student
   * @property {Number} id - Student ID.
   * @property {String} firstName - Student Name.
   * @property {String} location - Student location.
   */

  /**
   * Array of student objects
   * @type {Array<Student>}
   */
  const students = [
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 3, firstName: "Serena", location: "San Francisco" },
  ];
  return students;
}
