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



module.exports={};
