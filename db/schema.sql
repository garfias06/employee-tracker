DROP DATABASE IF EXISTS employee_management_db;
CREATE DATABASE employee_management_db;

USE employee_management_db;

CREATE TABLE department (
department_id INT AUTO_INCREMENT, 
department_name VARCHAR(30),
PRIMARY KEY (department_id)
);

CREATE TABLE com_role (
com_role_id INT AUTO_INCREMENT,
title VARCHAR(30),
salary INT,
department_id INT,
PRIMARY KEY (com_role_id),
FOREIGN KEY (department_id)
REFERENCES department(department_id)
);
ALTER TABLE com_role AUTO_INCREMENT=011;

CREATE TABLE employee (
employee_id INT AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
manager_id INT,
role_id INT,
PRIMARY KEY (employee_id),
FOREIGN KEY (role_id)
REFERENCES com_role(com_role_id)
);

ALTER TABLE employee 
ADD CONSTRAINT fk_employee 
FOREIGN KEY (manager_id) 
REFERENCES employee(employee_id);

ALTER TABLE employee AUTO_INCREMENT=017;