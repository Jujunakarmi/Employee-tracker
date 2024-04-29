const { viewEmployee, viewRoles, viewDepartments } = require('./queryView.js');
const { addEmployee, addRole, addDepartment } = require('./queryAdd.js');
const  updateEmployeeRole  = require('./queryUpdate.js');

//ADD display text HERE

function handletask(response) {
    switch (response.task) {
        case "View All Employees":
            viewEmployee();
            break;
        
        case "Add Employees":
            addEmployee();
            break;
        
         case "Update Employees":
            updateEmployeeRole();
            break;
       
        case "View All Roles":
            viewRoles();
            break;
       
        case "Add Role":
            addRole();
            break;
        
        case "View All Departments":
            viewDepartments();
        break;
        
        case "Add Department":
            addDepartment();
            break;
            
        case "Quit":
            process.exit(0);

         
    }

};

module.exports = handletask;
