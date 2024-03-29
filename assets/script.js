// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let newEmployee = true; // Create a condition to let the while loop run
  let n = 0; 
  const employeesArray = []; // Create an empty array for the while loop
  while (newEmployee === true) {
    employeesArray[n] = {
      firstName: prompt("Enter the Employee's First Name:"), 
      lastName: prompt("Enter the Employee's Last Name:"),
      salary: Number(prompt("Enter Employee's Salary:")) // Convert salary input to number
    }
    if (isNaN(employeesArray[n].salary)) {
      employeesArray[n].salary = 0; // Set salary to $0 if input isNaN
    }
    n++; 
    newEmployee = confirm("Enter another employee?"); // Let the user repeat or break the while loop
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salaryTotal = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    salaryTotal = salaryTotal + employeesArray[i].salary; // add each salary to the running total
  }
  let salaryAverage = salaryTotal / employeesArray.length; // calculate the salary average
  salaryAverage = salaryAverage.toFixed(2); // salary lists in currency form
  console.log(`The average salary between our ${employeesArray.length} employee(s) is $${salaryAverage}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]; // use built in Math to randomize choice
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
