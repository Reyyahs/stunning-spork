const inquirer = require("inquirer");
const mysql = require("mysql2");
const figlet = require("figlet");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12341234",
    database: "company_db",
  });