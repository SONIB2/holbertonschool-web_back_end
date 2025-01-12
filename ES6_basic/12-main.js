import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

// Creating employees list using createEmployeesObject function for multiple departments
const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

// Create the report object from the employees list
const report = createReportObject(employees);

// Output all employees and the number of departments
console.log(report.allEmployees); // Outputs the allEmployees object
console.log(report.getNumberOfDepartments()); // Outputs the number of departments
