const inquirer = require('inquirer')

const prompts =[
    //first task
    {
        name:'task',
        type:'list',
        message:'What would you like to do?',
        choices:['View All Employess', 'Add Employees', 'Update Employees', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department','Quit']
    },
    //To add a department
    {
        name:'department',
        type:'input',
        message:'What is the name of the department?',
        when:(response) => {
            if(response.task === 'Add department' ){
                return true;
            }
            return false;
        },
        //Validating input required
        validate: (response) => {
            if(response==='') {
                return console.log ('Invalid input. Try Again!!');
            }
            return true;
        }

    },
    //To add a role
    {
        name:'roleTitle',
        type:'input',
        message: 'What is the name of the role?',


    }


]

const init = () => {
    inquirer
    .prompt(prompts)
    .then((response => {
        handleTask (response)
    }))
    .catch((err) => {
        console.log(err)
    })
}

init()