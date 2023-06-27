/**
 * Creates an iterator object to iterate through every employee in every department of the report.
 * @param {Object} report - The report object.
 * @return {Object} An iterator object.
 */
export default function createIteratorObject(report) {
  let departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        // All departments have been iterated, return done: true
        return { value: undefined, done: true };
      }

      let currentDepartment = departments[currentDepartmentIndex];
      let employees = report.allEmployees[currentDepartment];
      let currentEmployee = employees[currentEmployeeIndex];

      if (currentEmployeeIndex >= employees.length - 1) {
        // Last employee in the department, move to the next department
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      } else {
        // Move to the next employee in the same department
        currentEmployeeIndex++;
      }

      // Return the current employee value with done: false
      return { value: currentEmployee, done: false };
    }
  };
}
