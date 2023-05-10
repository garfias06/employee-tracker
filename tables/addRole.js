// Connecting to database
// const inquirer = require('inquirer');
// const mysql = require('mysql2');
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: 'root',
//     password: 'elserver1.$',
//     database: 'employee_management_db'
//   },
//   console.log(`Connected to --employee_management_db-- database.`)
// ).promise();

// Questions to add:
// Name of new Role
// Salary
// Department where it belongs to

// const addNewRole=async()=>{
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: 'New Role:',
//             name: 'newRole',
//         },
//         {
//             type: 'input',
//             message: 'Add salary for new Role:',
//             name: 'salary',
//         },
//         {
//             type: 'list',
//             message: 'Select Department to add Role:',
//             name: 'department_list',
//             choices: deptChoice(),
//         }
//     ])
//     .then()
// }

// // addNewRole()

// const deptChoice= async ()=>{
//     const deptChoice='USE employee_management_db; SELECT department_name FROM department;';
//     const showDept=await db.query(deptChoice);
//     // return showDept[0];
//     console.table(showDept[0]);
// }
// deptChoice();


// module.exports={};
