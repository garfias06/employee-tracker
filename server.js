const express = require('express');
// const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const {showDepartment, showRoles, showEmployee}=require('./tables/fullTable');
const {}=require('./tables/addDept');
const {}=require('./tables/addEmployee');
const {}=require('./tables/addRole');
const {}=require('./tables/updateRole');


const app = express();
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connecting to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: 'root',
//     password: 'elserver1.$',
//     database: 'employee_management_db'
//   },
//   console.log(`Connected to --employee_management_db-- database.`)
// ).promise();

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
      if (answers === 'View all departments') {
        showDepartment();
      };
      if (answers === 'View all company roles') {
        showRoles();
      };
      if (answers === 'View all employees') {
        showEmployee();
      };

    })
};
promptList();





// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});