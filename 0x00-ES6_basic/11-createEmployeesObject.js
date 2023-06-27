/**
 * Creates an object with the department name and employees.
 * @param {string} departmentName - The name of the department.
 * @param {Array<string>} employees - The array of employee names.
 * @return {Object} The object containing the department name and employees.
 */
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: [...employees],
  };

  return employeesObject;
}
