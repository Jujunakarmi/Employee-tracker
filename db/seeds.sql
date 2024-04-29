INSERT INTO department (name)
VALUES
('Production'),
('Operations'),
('Legal'),
('Information Technology'),
('Management'),
('Sales');

INSERT INTO role(title, salary, department_id)
VALUES
('Engineer', 100000, 1),
('Accountant', 90000, 2),
('Lawyer', 90000, 3),
('IT Specialist', 70000, 4),
('Project Manager', 120000, 5),
('Telemarketer', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Layne', 'Staley', 1, 5),
('Kurt', 'Cobain', 2, 5),
('Eddie', 'Vedder', 3, 5),
('Siris', 'Dali', 4, 5),
('Sunny', 'Manandhar', 5, NULL),
('Kismat', 'Shrestha', 6, 9),
('Jimmy', 'Page', 1, 9),
('Divesh', 'Mulmi', 2, 9),
('Avaya', 'Bajracharya', 5, NULL);