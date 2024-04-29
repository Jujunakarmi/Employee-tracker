// const inquirer = require('inquirer')
const retrieveDepartments = require('./retrieveDepartments.js')
const retrieveRole = require('./retrieveRole.js')
const retrieveEmployee = require('./retrieveEmployee.js')

const prompts = [
    //first task
    {
        name: 'task',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employees', 'Update Employees', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    },
    //To add a department
    {
        name: 'department',
        type: 'input',
        message: 'What is the name of the department?',
        when: (response) => {
            if (response.task === 'Add department') {
                return true;
            }
            return false;
        },
        //Validating input required
        validate: (response) => {
            if (response === '') {
                return console.log('Invalid input. Try Again!!');
            }
            return true;
        }

    },
    //To add a role
    {
        name: 'roleTitle',
        type: 'input',
        message: 'What is the name of the role?',
        when: (response) => {
            if (response.task === 'Add Role') {
                return true;
            }
            return false
        },
        validate: (response) => {
            if (response === '') {
                console.log('Invalid Input. Try Again.!!')
            }
            return true;
        }
    },
    //Add a role salary
    {
        name: 'roleSalary',
        type: 'input',
        message: 'What is the salary of the role?',
        when: (response) => {
            if (response.task === 'Add Role') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                console.log('Invalid input. Try Again!!')
            }
            return true;
        }

    },

    //Add role department
    {
        name: 'roleDepartment',
        type: 'list',
        message: 'Which department does the role belong to?',
        choices: retrieveDepartments,
        when: (response) => {
            if (response.task === 'Add Role') {
                return true;
            }
            return false;
        }

    },
    //Add a employee
    {
        name: "employeeFirstName",
        type: "input",
        message: "What is the employee\'s first name?",
        when: (response) => {
            if (response.task === 'Add Employees') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                console.log('Invalid input. Try again.!!')
            }
            return true;

        }
    },
    {
        name: 'employeeLastName',
        type: 'input',
        message: 'What is the employee\'s last name?',
        when: (response) => {
            if (response.task === 'Add Employees') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                console.log('Invalid input. Try again.!!')
            }
            return true;

        }

    },
    {
        name: 'employeeRole',
        type: 'list',
        message: 'What is the employee\'s role?',
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Add Employees') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                console.log('Invalid input. Try again.!!')
            }
            return true;

        }

    },
    {
        name: 'employeeManager',
        type: 'list',
        message: 'Whos is employee\'s manager?',
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Add Employees') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                console.log('Invalid input. Try again.!!')
            }
            return true;

        }

    },
    //Update an employee
    {
        name: 'updateEmployee',
        type: 'list',
        message: 'Which employee role would you like to update?',
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Update Employees') {
                return true;
            }
            return false;
        },
    },
    //Update role of employee
    {
        name: 'updateRole',
        type: 'list',
        message: 'Which role do you want to assign the selected employee?',
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Update Employees') {
                return true;
            }
            return false;

        }
    },

];

 module.exports = prompts;

// const init = () => {
//     inquirer
//         .prompt(prompts)
//         .then((response => {
//             handleTask(response)
//         }))
//         .catch((err) => {
//             console.log(err)
//         })
// }

// init()