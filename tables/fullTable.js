// Connecting to database
// const cTable = require('console.table');
// const mysql = require('mysql2');

// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'elserver1.$',
//         database: 'employee_management_db'
//     },
//     console.log(`Connected to --employee_management_db-- database.`)
// ).promise();

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

// module.exports = { showDepartment, showRoles, showEmployee };