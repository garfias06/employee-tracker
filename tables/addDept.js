// Connecting to database
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'elserver1.$',
    database: 'employee_management_db'
  },
  console.log(`Connected to --employee_management_db-- database.`)
).promise();

const addDept= ()=>{
    inquirer.prompt([   
         {
        type: 'input',
        message: 'New Department name:',
        name: 'newDepartment',
      }
    ])
    .then( async (answer)=>{
        let department=`USE employee_management_db; INSERT INTO department(department_name) VALUES("${answer.newDepartment}");`;
        await db.query(department);
        console.log(`${answer.newDepartment} added`);
    })
   };


module.exports={addDept};


