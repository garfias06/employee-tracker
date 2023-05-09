-- USE employee_management_db;

-- INSERT INTO department(department_id, department_name)
-- VALUES(001, "Quality_Control"),
-- (002, "Welding_01"),
-- (003, "Welding_02");

-- INSERT INTO com_role(com_role_id, title, salary, department_id)
-- VALUES (011, "Engineer", 150125, 001),
-- (012, "Pipe_Welder", 120125, 002),
-- (013, "Structural_Welder", 100125, 003),
-- (014, "Single_Hand", 80125, 003),
-- (015, "Quality_Control_Engineer", 130125, 001),
-- (016, "Helper", 70125, 002),
-- (017, "Supervisor1", 70125, 001),
-- (018, "Supervisor2", 70125, 002),
-- (019, "Supervisor3", 70125, 003);

-- -- !!!!!
-- USE employee_management_db;
-- INSERT INTO employee(employee_id, first_name, last_name, manager_id, role_id)
-- VALUES (017, "Randall", "Cervantes", NULL, 017),
-- (018, "Rodolfo", "Barry", NULL, 018),
-- (019, "Jean", "Warren", NULL, 019),
-- (111, "Marlin", "Wolf", 017, 015),
-- (112, "Gerardo", "Vasquez", 017, 011),
-- (117, "Constance", "Bowen", 017, 011),
-- (113, "Brent", "Mckenzie", 018, 012),
-- (114, "Darlene", "Duarte", 018, 016),
-- (118, "Lorrie", "Berger", 018, 016),
-- (120, "Oscar", "Mcclure", 018, 012),
-- (122, "Beverly", "Dean", 018, 012),
-- (125, "Raul", "Miranda", 018, 016),
-- (115, "Florencio", "Huber", 019, 013),
-- (116, "Magdalena", "Robertson", 019, 014),
-- (119, "Selena", "Larsen", 019, 014),
-- (121, "Dona", "Cross", 019, 013),
-- (123, "Mari", "Daniels", 019, 013),
-- (124, "Charles", "Nixon", 019, 014);


USE employee_management_db;

INSERT INTO department(department_name)
VALUES("Quality_Control"),
("Welding_01"),
("Welding_02");

INSERT INTO com_role(title, salary, department_id)
VALUES ("Engineer", 150125, 001),
("Pipe_Welder", 120125, 002),
("Structural_Welder", 100125, 003),
("Single_Hand", 80125, 003),
("Quality_Control_Engineer", 130125, 001),
("Helper", 70125, 002),
("Supervisor1", 70125, 001),
("Supervisor2", 70125, 002),
("Supervisor3", 70125, 003);

-- !!!!!
USE employee_management_db;
INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUES ("Randall", "Cervantes", NULL, 017),
("Rodolfo", "Barry", NULL, 018),
("Jean", "Warren", NULL, 019),
("Marlin", "Wolf", 017, 015),
("Gerardo", "Vasquez", 017, 011),
("Constance", "Bowen", 017, 011),
("Brent", "Mckenzie", 018, 012),
("Darlene", "Duarte", 018, 016),
("Lorrie", "Berger", 018, 016),
("Oscar", "Mcclure", 018, 012),
("Beverly", "Dean", 018, 012),
("Raul", "Miranda", 018, 016),
("Florencio", "Huber", 019, 013),
("Magdalena", "Robertson", 019, 014),
("Selena", "Larsen", 019, 014),
("Dona", "Cross", 019, 013),
("Mari", "Daniels", 019, 013),
("Charles", "Nixon", 019, 014);
