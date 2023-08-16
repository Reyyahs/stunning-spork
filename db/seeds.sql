INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 60000, 1),
  ('Lead Engineer', 130000, 2),
  ('Software Engineer', 80000, 2),
  ('Accountant', 160000, 3),
  ('Finance Manager', 125000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Pete', 'Smith', 1, NULL),
  ('Landon', 'Johnson', 5, NULL),
  ('David', 'Williams', 3, NULL),
  ('Joe', 'Jones', 2, 1),
  ('Matthew', 'Brown', 2, 1),
  ('Rey', 'Yang', 4, 3),
  ('Vince', 'Vang', 2, 3),
  ('Nicholas', 'Chue', 2, 3),
  ('Mark', 'Li', 4, 3),
  ('Emma', 'Moore', 6, 5);