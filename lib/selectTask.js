const inquirer = require('inquirer');
const prompts = require('./prompts');
const handleTask = require ('./handleTask');


const selectTask = () => {
    inquirer
    .prompt(prompts)
    .then((response => {
        handleTask (response)
    }))
    .catch((err) => {
        console.log(err)
    })
};

module.exports = selectTask;