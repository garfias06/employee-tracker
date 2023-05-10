const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

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
          process.exit();
      }
    })
};

promptList();

// !!FULL TABLES
const showEmployee = () => {
  let employees = 'SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.name FROM employee LEFT JOIN role ON role.id=employee.role_id LEFT JOIN department ON department.id=role.department_id;';
  db.query(employees, (err, res) => {
    console.table(res)
    promptList()
  });
};

const showRoles = () => {
  let roles = 'SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id;';
  db.query(roles, (err, res) => {
    console.table(res)
    promptList()
  });
};

const showDepartment = () => {
  let department = 'SELECT * FROM department;';
  db.query(department, (err, res) => {
    console.table(res)
    promptList()
  });
};

//!!!! ADD DEPARTMENT
const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'New Department name:',
      name: 'newDepartment',
    }
  ])
    .then((answer) => {
      let department = `INSERT INTO department(department_name) VALUES("${answer.newDepartment}");`;
      db.query(department, (err, res) => {

        console.log(`${answer.newDepartment} added`);
        promptList();
      });
    })
};

// !!!ADD ROLE
const addRole = () => {
  let department = 'SELECT * FROM department;';
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

const addEmployee = () => {
  let role = 'SELECT * FROM role;';

  db.query(role, (err, res) => {
    const roleChoices = res.map((item) => ({
      name: item.title,
      value: item.id
    }));

    let manager = 'SELECT employee.id, employee.first_name, employee.last_name FROM employee WHERE role_id IN (1,2,3);';

    db.query(manager, (err, res) => {
      const managerChoices = res.map((man) => ({
        name: man.first_name,
        value: man.id
      }));
    
    inquirer.prompt([
      {
        type: 'input',
        message: 'First Name:',
        name: 'firstName',
      },
      {
        type: 'input',
        message: 'Last Name',
        name: 'lastName',
      },
      {
        type: 'list',
        message: 'Select a Role:',
        name: 'roles',
        choices: roleChoices
      },
      {
        type: 'list',
        message: 'Manager:',
        name: 'manager',
        choices: managerChoices
      },
    ])
      .then((answers) => {
        let addR = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}","${answers.lastName}",${answers.roles},${answers.manager});`;
        db.query(addR, (err, res) => {
          if (err) throw err
          console.log('added')
          promptList()
        })
      })
    })
  });
}

// !!UPDATE ROLE
const updateRole = () => {
  let employee = 'SELECT * FROM employee;';

  db.query(employee,  (err, res) => {
    const employeeChoices = res.map((item) => ({
      name: item.first_name,
      value: item.id
    }))

    let roles = 'SELECT * FROM role;';
    db.query(roles, (err, res)  => {
      const roleChoices = res.map((item) => ({
        name: item.title,
        value: item.id
      }));
    

    inquirer.prompt([
      {
        type: 'list',
        message: 'Select Employee:',
        name: 'employee_list',
        choices: employeeChoices
      },
      {
        type: 'list',
        message: 'Select New Role:',
        name: 'roles_list',
        choices: roleChoices
      },

    ])
      .then((answers) => {
        let addR = `UPDATE employee SET role_id=${answers.roles_list} WHERE id=${answers.employee_list};`;
        db.query(addR, (err, res) => {
          if (err) throw err
          console.log('added')
          promptList()
        })
      })
    })
  });
};
