-- Departments
INSERT INTO department (name) VALUES
("Administration"),
("Manager"),
("Human Resources"),  
("Marketing"), 
("Product Development"), 
("Product Validation");

-- Roles
INSERT INTO role (title, salary, department_id) VALUES ("Chief Executive Officer", 150000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 115000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Senior HR Assistant", 75000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ("HR Assistant", 65000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Multimedia Specialist", 50000.00, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 90000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Senior Software Engineer", 95000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Scrum Master", 80000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Product Owner", 75000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("QA Specialist", 85000.00, 6);
INSERT INTO role (title, salary, department_id) VALUES ("Product Validation Engineer", 88000.00, 6);

-- Employees
-- CEO (no assigned manager)
INSERT INTO employee (first_name, last_name, role_id) VALUES
("Cisco", "Lopez", 1);

-- All Employees (assigned managers)
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Roxanna", "Marquez", 2, 1),
("Sylvia", "Grace", 3, 2),
("Reba", "Larrinaga", 3, 2),
("Sam", "Romero", 4, 2),
("Robert", "Imperio", 5, 2),
("Goran", "Djuric", 5, 2),
("George", "Larrinaga", 5, 2),
("Abel", "Lopez", 5, 2),
("Joanna", "Lopez", 6, 2),
("Jeremy", "Nelson", 6, 2);



