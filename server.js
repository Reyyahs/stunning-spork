const inquirer = require("inquirer");
const mysql = require("mysql2");
const figlet = require("figlet");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12341234",
    database: "company_db",
  });

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err.stack);
      return;
    }
    console.log("Connected to the database.");
    // Launch the main menu
    multiMenu();
  });

  figlet("Employee Tracker", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  const multiMenu = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "option",
          message: "Choose an action:",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee's role",
            "Exit",
          ],
        },
      ])
      .then(handleMenuChoice);
  };

  const handleMenuChoice = (answer) => {
    switch (answer.option) {
      case "View all departments":
        viewDepartments();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee's role":
        updateEmployee();
        break;
      case "Exit":
        console.log("Goodbye!");
        db.end(); // Close the database connection
        break;
      default:
        console.log("Invalid choice! Please try again.");
        multiMenu();
        break;
    }
  };

  const viewDepartments = () => {
    db.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.table(res);
      multiMenu();
    });
  };
  
  const viewRoles = () => {
    db.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      console.table(res);
      multiMenu();
    });
  };

  const viewEmployees = () => {
    const query = `
      SELECT employee.id, first_name, last_name, title, salary, name, manager_id
      FROM ((department
      JOIN role ON department.id = role.department_id)
      JOIN employee ON role.id = employee.role_id);`;
  
    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      multiMenu();
    });
  };
  
  const addDepartment = () => {
    inquirer
      .prompt([
        {
          name: "department",
          type: "input",
          message: "Enter a name for the department",
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO department (name) VALUES (?)",
          [answer.department],
          (err, res) => {
            if (err) {
              throw err;
            }
            console.log("Department successfully added!");
            multiMenu();
          }
        );
      });
  };
  
  const addRole = () => {
    inquirer
      .prompt([
        {
          name: "roleTitle",
          type: "input",
          message: "What is the title of the role?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the job's salary?",
        },
        {
          name: "deptId",
          type: "input",
          message: "What is the department ID number?",
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
          [answer.roleTitle, answer.salary, answer.deptId],
          (err, res) => {
            if (err) throw err;
            console.log("Role successfully added!");
            multiMenu();
          }
        );
      });
  };
  
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          name: "firstName",
          type: "input",
          message: "What is the employee's first name?",
        },
        {
          name: "lastName",
          type: "input",
          message: "What is the employee's last name?",
        },
        {
          name: "roleId",
          type: "input",
          message: "What is the employee's role id?",
        },
        {
          name: "managerId",
          type: "input",
          message: "What is the manager Id?",
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
          [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
          (err, res) => {
            if (err) throw err;
            console.log("Employee successfully added!");
            multiMenu();
          }
        );
      });
  };