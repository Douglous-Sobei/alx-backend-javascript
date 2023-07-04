/**
 * Creates an iterator object to iterate through every employee in every department of the report.
 * @param {Object} report - The report object.
 * @return {Object} An iterator object.
 */
export default function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
