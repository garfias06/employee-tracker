DROP DATABASE IF EXISTS employee_management_db;
CREATE DATABASE employee_management_db;

USE employee_management_db;

CREATE TABLE department (
id INT, 
department_name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE com_role (
id INT,
title VARCHAR(30),
salary INT,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department (id)
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY (id)
FOREIGN KEY (role_id)
REFERENCES com_role (id)
FOREIGN KEY (manager_id) 
REFERENCES employee(id)
);

-- ALTER TABLE employee (
-- FOREIGN KEY (manager_id) 
-- REFERENCES employee(id)
-- )