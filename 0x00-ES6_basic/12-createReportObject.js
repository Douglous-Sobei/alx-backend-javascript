/**
 * Creates a report object with all employees and a method to get the number of departments.
 * @param {Object} employeesList - The object containing department names and employees.
 * @return {Object} The report object with all employees and the getNumberOfDepartments method.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeesList},
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
}
