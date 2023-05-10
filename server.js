const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
// const { showDepartment1, showRoles1, showEmployee1 } = require('./tables/fullTable');
// const { addDept } = require('./tables/addDept');
// const { } = require('./tables/addEmployee');
// const { } = require('./tables/addRole');
// const { } = require('./tables/updateRole');

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
  }
);

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
        'Update employee role',
        'Quit'],
    }
  ])
    // VALIDATING CHOICES
    .then((answers) => {
      // console.log(answers)
      switch (answers.list_option) {
        case 'View all departments':
          showDepartment();
          break;
        case 'View all company roles':
          showRoles();
          break;
        case 'View all employees':
          showEmployee();
          break;
        case 'Add a new department':
          addDepartment();
          break;
        case 'Add a new company role':
          addRole();
          break;
        case 'Add a new employee':
          addEmployee();
          break;
        case 'Update employee role':
          updateRole();
          break;
        default:
          process.exit()

      }
    })
};

promptList();

//!!!!! FULL TABLES
// const showDepartment = () => {
//   showDepartment1();
//   promptList();
//   console.log('--------------------------------------------------------');
// }
// const showRoles = () => {
//   showRoles1();
//   promptList();
//   console.log('--------------------------------------------------------');
// }
// const showEmployee = () => {
//   showEmployee1();
//   promptList();
//   console.log('--------------------------------------------------------');
// }

const showEmployee = async () => {
  let employees = 'SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, com_role.title, com_role.salary, department.department_name FROM employee LEFT JOIN com_role ON com_role.com_role_id=employee.role_id LEFT JOIN department ON department.department_id=com_role.department_id;';
  let showE = await db.query(employees);
  console.table(showE[0]);
  promptList();
};

const showRoles = () => {
  let roles = 'SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id;';
  db.query(roles, (err, res) => {
    console.table(res)
    promptList()
  });

};

const showDepartment = () => {
  let department = 'SELECT * FROM department';
  db.query(department, (err, res) => {
    console.table(res)
    promptList()
  });

};

//!!!! ADD DEPARTMENT
// const addDepartment = () => {
//   addDept();
//   promptList();
// }

const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'New Department name:',
      name: 'newDepartment',
    }
  ])
    .then( (answer) => {
      let department = `INSERT INTO department(department_name) VALUES("${answer.newDepartment}");`;
      db.query(department, (err, res)=>{

        console.log(`${answer.newDepartment} added`);
        promptList();
      });
    })
};



const addRole = () => {
  let department = 'SELECT * FROM department';
  db.query(department, (err, res) => {
    const deptChoices = res.map((item) => ({
      name: item.name,
      value: item.id
    }))


    inquirer.prompt([
      {
        type: 'input',
        message: 'New Role:',
        name: 'newRole',
      },
      {
        type: 'input',
        message: 'Add salary for new Role:',
        name: 'salary',
      },
      {
        type: 'list',
        message: 'Select Department to add Role:',
        name: 'department_list',
        choices: deptChoices
      }
    ])
      .then((answers) => {
        let addR = `INSERT INTO role (title, salary, department_id) VALUES ("${answers.newRole}","${answers.salary}", ${answers.department_list});`;
        db.query(addR, (err, res) => {
          if (err) throw err
          console.log('added')
          promptList()
        })
      })
  });
}

// !!! ADD NEW EMPLOYEE 
const addEmployee =  () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Add first name:',
      name: 'firstName',
    },
    {
      type: 'input',
      message: 'Add last name:',
      name: 'lastName',
    },
    {
      type: 'input',
      message: 'Add Role:',
      name: 'existingRole',
    },
  ])
    .then( () => {

    })

}











// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});