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