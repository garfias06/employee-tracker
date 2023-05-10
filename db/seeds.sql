USE employee_management_db;

INSERT INTO department(name)
VALUES("Quality_Control"),
("Welding_01"),
("Welding_02");

INSERT INTO role(title, salary, department_id)
VALUES ("Engineer", 150125, 1),
("Pipe_Welder", 120125, 2),
("Structural_Welder", 100125, 3),
("Single_Hand", 80125, 3),
("Quality_Control_Engineer", 130125, 1),
("Helper", 70125, 2),
("Supervisor1", 70125, 1),
("Supervisor2", 70125, 2),
("Supervisor3", 70125, 3);


INSERT INTO employee(first_name, last_name, role_id, manager_id )
VALUES ("Randall", "Cervantes", 1, NULL),
("Rodolfo", "Barry", 2, NULL),
("Jean", "Warren", 3, NULL),
("Marlin", "Wolf", 4, 1),
("Gerardo", "Vasquez", 5, 2),
("Constance", "Bowen", 6, 3);
