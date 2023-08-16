# SQL - Employee Tracker


## Description


This application enables users to oversee HR operations within a company through a content management system. Users have the capability to choose various tasks for observing or adjusting information related to departments, roles, and employees. These interactions will lead to updates being applied to the underlying database housing this data.


## Installation


To utilize this application, Node.js is essential. Additionally, ensure you run "npm install" to import the inquirer/mysql2/figlet libraries into your environment

## Usage


To begin the application, initiate the command "mysql -u root -p" within the terminal. Then, import the database by executing the code "source db/schema.sql" and populate it with data by running "source db/seeds.sql". Once the database is operational, utilize the command "exit" to exit the MySQL environment. Following this, run "node server.js" in your terminal. Proceed by choosing the desired action. Upon making your selection, data will either be exhibited or you'll be prompted to input data and make choices to finalize the operation.

Employee Tracker Video Demonstration: https://drive.google.com/file/d/1YWuMsVFbRQrFw_WRByoRIV9jI6xj4IVh/view

## Credits

N/A

## License
N/A