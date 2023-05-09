const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
// const {showDepartment, showRoles, showEmployee}=require('./tables/fullTable');
const { } = require('./tables/addDept');
const { } = require('./tables/addEmployee');
const { } = require('./tables/addRole');
const { } = require('./tables/updateRole');

const app = express();
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connecting to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'elserver1.$',
    database: 'employee_management_db'
  },
  console.log(`Connected to --employee_management_db-- database.`)
).promise();

// LIST TO BE PROMPTED
const promptList = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Select task you would like to do today:',
      name: 'list_option',
      choices: ['View all departments',
        'View all company roles',
        'View all employees',
        'Add a new department',
        'Add a new company role',
        'Add a new employee',
        'Update employee role'],
    }
  ])
    // VALIDATING CHOICES
    .then((answers) => {
      switch (answers) {
        case 'View all departments':
          showDepartment();
          break;
        case 'View all company roles':
          showRoles();
          break;
        case 'View all employees':
          showEmployee();
          break;
        default:
          console.log("thanks")
          break;
      }
    })
};
promptList();

// QUERY PREPARED STATEMENT FUNCTIONS
const showEmployee = async () => {
  let employees = 'SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, com_role.title, com_role.salary, department.department_name FROM employee LEFT JOIN com_role ON com_role.com_role_id=employee.role_id LEFT JOIN department ON department.department_id=com_role.department_id;';
  let showE = await db.query(employees);
  console.log(showE);
  promptList();
};

const showRoles = async () => {
  let roles = 'SELECT com_role.com_role_id, com_role.title, com_role.salary, department.department_name FROM com_role LEFT JOIN department ON department.department_id=com_role.department_id;';
  let showR = await db.query(roles);
  console.log(showR);
  promptList();
};

const showDepartment = async () => {
  let department = 'SELECT * FROM employee_management_db.department;';
  let showDep = await db.query(department);
  console.log(showDep);
  promptList();
};

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});