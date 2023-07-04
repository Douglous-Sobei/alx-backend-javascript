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
  const student1 = {
    id: 1,
    firstName: "Guillaume",
    location: "San Francisco",
  };
  const student2 = {
    id: 2,
    firstName: "James",
    location: "Columbia",
  };
  const student3 = {
    id: 5,
    firstName: "Serena",
    location: "San Francisco",
  };
  return [student1, student2, student3];
}
