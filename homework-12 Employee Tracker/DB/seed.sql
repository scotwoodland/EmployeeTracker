-- Departments
INSERT INTO department (name) VALUES
("Executive"),
("Consumer Products"),
("Imagineering"),  
("Media Networks"), 
("Parks and Resorts"), 
("Studio Entertainment"),
("Travel Department");

-- Roles
INSERT INTO role (title, salary, department_id) VALUES ("President", 350000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Vice President", 225000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Operating Division Manager", 150000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Staff Division Manager", 95000.00, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Team Lead", 72000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Specialist", 65000.00, 6);
INSERT INTO role (title, salary, department_id) VALUES ("Full Time Team Member", 45000.00, 7);
INSERT INTO role (title, salary, department_id) VALUES ("Full Time Seasonal TM", 25000.00, 8);
INSERT INTO role (title, salary, department_id) VALUES ("Part Time Team Member", 35000.00, 9);
INSERT INTO role (title, salary, department_id) VALUES ("Part Time Seasonal TM", 15000.00, 10);

-- Employees
-- President (no assigned manager)
INSERT INTO employee (first_name, last_name, role_id) VALUES
("Lisa", "Smith", 1);

-- All Employees (assigned managers)
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Mary", "Johnson", 2, 1),
("John", "Williams", 2, 1),
("Patricia", "Jones", 3, 1),
("Robert", "Brown", 3, 2),
("Jennifer", "Davis", 3, 3),
("Michael", "Miller", 4, 4),
("Linda", "Wilson", 4, 3),
("William", "Moore", 5, 4),
("Elizabeth", "Taylor", 5, 4),
("David", "Anderson", 5, 3),
("Barbara", "Thomas", 6, 2),
("Richard", "Jackson", 6, 3),
("Susan", "Harris", 7, 4);



