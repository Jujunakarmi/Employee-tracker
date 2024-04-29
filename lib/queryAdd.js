const db = require('../config/connection.js')


function addDepartment(response) {
    db.query
        (`INSERT INTO department(name)
    VALUES
    ('${response.department}');`,
            (err, res) => {
                if (err) throw err;
                console.log(`${response.department} department added!`);
                const selectTask = require('./selectTask.js')
                selectTask();
            });
};


function addRole(response) {
    db.query
        (`INSERT INTO role(rtitle, salary, department_id)
    VALUES
    ('${response.roleTitle}', '${response.roleSalary}', '${response.roleDepartment}')`,
            (err, res) => {
                if (err) throw err;
                console.log(`${response.roleTitle} role added!`);
                const selectTask = require('./selectTask.js')
                selectTask();
            });
};