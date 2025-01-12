// 12-createReportObject.js
export default function createReportObject(employeesList) {
    return {
      allEmployees: employeesList, // Maps to the employeesList passed as a parameter
      getNumberOfDepartments: function() {
        return Object.keys(employeesList).length; // Returns the number of departments (keys in employeesList)
      }
    };
  }
  