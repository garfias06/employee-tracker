// Connecting to database
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

// QUERY PREPARED STATEMENT FUNCTIONS
const showDepartment = async () => {
    let employees = 'SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, com_role.title, com_role.salary, department.department_name FROM employee LEFT JOIN com_role ON com_role.com_role_id=employee.role_id LEFT JOIN department ON department.department_id=com_role.department_id;';
    let showEm = await db.query(employees);
    console.log(showEm);
    await promptList();
};

const showRoles = async () => {
  await db.query('SELECT * FROM employee_management_db.com_role;', (err, results)=>{
   if (err){
     console.log(err)
   }else{
     console.log(results);
   }
 })
 promptList();
};

// const showEmployee = async () => {
//   await db.query('SELECT * FROM employee_management_db.employee;', (err, results)=>{
//    if (err){
//      console.log(err)
//    }else{
//      console.log(results);
//    }
//  })
//  promptList();
// };

module.exports = { showDepartment, showRoles, showEmployee };