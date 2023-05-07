USE employee_management_db;

INSERT INTO department(department_id, department_name)
VALUES(001, "Quality_Control"),
(002, "Welding_01"),
(003, "Welding_02");

INSERT INTO com_role(com_role_id, title, salary, department_id)
VALUES (011, "Engineer", 150125, 001),
(012, "Pipe_Welder", 120125, 002),
(013, "Structural_Welder", 100125, 003),
(014, "Single_Hand", 80125, 003),
(015, "Quality_Control_Engineer", 130125, 001),
(016, "Helper", 70125, 002),
(017, "Supervisor1", 70125, 001),
(018, "Supervisor2", 70125, 002),
(019, "Supervisor3", 70125, 003);


INSERT INTO employee(employee_id, first_name, last_name, role_id, manager_id)
VALUES(111, "Marlin", "Wolf", 015, 017),
(112, "Gerardo", "Vasquez", 011, 017),
(117, "Constance", "Bowen", 011, 017),
(113, "Brent", "Mckenzie", 012, 018),
(114, "Darlene", "Duarte", 016, 018),
(118, "Lorrie", "Berger", 016, 018),
(120, "Oscar", "Mcclure", 012, 018),
(122, "Beverly", "Dean", 012, 018),
(125, "Raul", "Miranda", 016, 018),
(115, "Florencio", "Huber", 013, 019),
(116, "Magdalena", "Robertson", 014, 019),
(119, "Selena", "Larsen", 014, 019),
(121, "Dona", "Cross", 013, 019),
(123, "Mari", "Daniels", 013, 019),
(124, "Charles", "Nixon", 014, 019);
(126, "Randall", "Cervantes", 017, NULL),
(127, "Rodolfo", "Barry", 018, NULL),
(128, "Jean", "Warren", 019, NULL);

INSERT INTO employee(employee_id, first_name, last_name, role_id, manager_id)
VALUES (126, "Randall", "Cervantes", 017, NULL),
(127, "Rodolfo", "Barry", 018, NULL),
(128, "Jean", "Warren", 019, NULL);
