-- SHOW ALL EMPLOYEES
USE employee_management_db;
SELECT employee.employee_id,
employee.first_name,
employee.last_name,
employee.manager_id,
com_role.title,
com_role.salary,
department.department_name
FROM employee
LEFT JOIN com_role 
ON com_role.com_role_id=employee.role_id
LEFT JOIN department 
ON department.department_id=com_role.department_id;