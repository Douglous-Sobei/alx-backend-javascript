/**
 * Creates an iterator object to iterate through every employee in every department.
 * @param {Object} report - The report object created with createReportObject.
 * @return {Object} An iterator object to iterate through employees.
 */
export default function createIteratorObject(report) {
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
    const departments = Object.keys(report.allEmployees);
    const employees = Object.values(report.allEmployees).flatMap(list => list);
  
    return {
      next() {
        if (currentEmployeeIndex >= employees.length) {
          if (currentDepartmentIndex >= departments.length) {
            return { done: true };
          }
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
        }
  
        const employee = employees[currentEmployeeIndex];
        currentEmployeeIndex++;
  
        return { value: employee, done: false };
      },
    };
  }
  