DROP DATABASE IF EXISTS employee_management_db;
CREATE DATABASE employee_management_db;

USE employee_management_db;

CREATE TABLE department (
department_id INT, 
department_name VARCHAR(30),
PRIMARY KEY (department_id)
);

CREATE TABLE com_role (
com_role_id INT,
title VARCHAR(30),
salary INT,
department_id INT,
PRIMARY KEY (com_role_id),
FOREIGN KEY (department_id)
REFERENCES department(department_id)
);

CREATE TABLE employee (
employee_id INT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY (employee_id),
FOREIGN KEY (role_id)
REFERENCES com_role(com_role_id)

-- FOREIGN KEY (manager_id) 
-- REFERENCES employee(employee_id)
);

ALTER TABLE employee ADD CONSTRAINT fk_employee FOREIGN KEY (manager_id) 
REFERENCES employee(employee_id);