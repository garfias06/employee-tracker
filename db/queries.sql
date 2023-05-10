-- SHOW ALL EMPLOYEES
USE employee_management_db;
SELECT employee.id,
employee.first_name,
employee.last_name,
employee.manager_id,
role.title,
role.salary,
department.name
FROM employee
LEFT JOIN role 
ON role.id=employee.role_id
LEFT JOIN department 
ON department.id=role.department_id;

-- SHOW ALL ROLES IN THE COMPANY
SELECT role.id, 
role.title, 
role.salary, 
department.name 
FROM role 
LEFT JOIN department 
ON role.department_id = department.id;



SELECT role.id, 
role.title, 
role.salary, 
department.name 
FROM role 
LEFT JOIN department 
ON role.department_id = department.id;