// -----------------------------------------------------------
// |                                                          |
// |  ____              _                                     |
// | | ___|_ __ ___ __ | | ___  _   _  ___  ___               |
// | | _| | '_`_\| '_ \| |/ _ \| | | |/ _ \/ _ \              |
// | | |__| | || | |_) | | (_) | |_| |  __/  __/              |
// | |____|_|_||_| .__/|_|\___/ \_,| |\___|\___/              |
// |             |_|            |___/                         |
// |                                                          |
// |  __  __                                                  |
// | |  \/  | __ _ _ __   __ _  __ _  ___ _ __                |
// | | |\/| |/_ ` | '_ \ /  ` |/  ` |/ _ \ '__|               |
// | | |  | | (_| | | | | (_| | (_| |  __/ |                  |
// | |_|  |_|\__,_|_| | |\__,_|\__, |\___|_|                  |
// |                           |___/                          |
// |                                                          |
// `__________________________________________________________,


// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connection Set up
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Littlena2",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    startPrompting();
});

function startPrompting() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Department",
            "Add Role",
            "Add Employee",
            "View Departments",
            "View Roles",
            "View Employees",
            "Update Employee Role",
            "Delete Department",
            "Delete Role",
            "Delete Employee",
            "EXIT"]
    }).then(function (answer) {
        console.log("You selected: " + answer.action);

        switch (answer.action) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Delete Department":
                deleteDepartment();
                break;
            case "Delete Role":
                deleteRole();
                break;
            case "Delete Employee":
                deleteEmployee();
                break;
            default:
                exit();
        }
    });
}


// Functions for Adding Dept, Role, Employee 
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "Enter name of department:",
        name: "deptName"
    }).then(function (answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function (err, res) {
            if (err) throw err;
            console.table(res)
            console.log("Successfully added Department!");
            startPrompting();
        })
    });
}

function addRole() {
    inquirer.prompt([{
        type: "input",
        message: "Enter role:",
        name: "roleName"
    },
    {
        type: "input",
        message: "Enter role salary:",
        name: "annualSalary"
    },
    {
        type: "input",
        message: "Enter department ID:",
        name: "deptID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [answer.roleName, answer.annualSalary, answer.deptID], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully added Role!");
            startPrompting();
        });
    });
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "Enter first name of new employee:",
        name: "firstName"
    },
    {
        type: "input",
        message: "Enter last name of new employee:",
        name: "lastName"
    },
    {
        type: "input",
        message: "Enter employee's role ID:",
        name: "roleID"
    },
    {
        type: "input",
        message: "Enter employee's manager ID:",
        name: "managerID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully added New Employee!");
            startPrompting();
        });
    });
}

// Functions for Viewing Dept, Role, Employee
function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompting();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompting();
    });
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompting();
    });
}

// Function for Updating Employee Role
function updateEmployeeRole() {
    inquirer.prompt([{
        type: "input",
        message: "Type First Name of employee you would like to update:",
        name: "employeeUpdate"
    },
    {
        type: "input",
        message: "Enter the updated role:",
        name: "updateRole"
    }
    ]).then(function (answer) {
        connection.query("UPDATE employee SET role_id=? WHERE first_name=?", [answer.updateRole, answer.employeeUpdate], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully updated Employee Role!");
            startPrompting();
        });
    });
}

// Functions for Deleting Dept, Role, Employee
function deleteDepartment() {
    inquirer.prompt({
    type: "input",
    message: "Enter Department Name:",
    name: "deptName"
}).then(function (answer) {
    connection.query("DELETE FROM department WHERE name=?", [answer.deptName], function (err, res) {
        if (err) throw err;
        console.log("Successfully Deleted Department!");
        startPrompting();
    });
});
}

function deleteRole() {
    inquirer.prompt({
    type: "input",
    message: "Enter Role Title:",
    name: "roleTitle"
}).then(function (answer) {
    connection.query("DELETE FROM role WHERE title=?", [answer.roleTitle], function (err, res) {
        if (err) throw err;
        console.log("Successfully Deleted Role!");
        startPrompting();
    });
});
}

function deleteEmployee() {
    inquirer.prompt({
    type: "input",
    message: "Enter Employee ID:",
    name: "employeeID"
}).then(function (answer) {
    connection.query("DELETE FROM employee WHERE id =?", [answer.employeeID], function (err, res) {
        if (err) throw err;
        console.log("Successfully Deleted Employee!");
        startPrompting();
    });
});
}


// Function to Exit App
function exit() {
    connection.end();
    process.exit();
}