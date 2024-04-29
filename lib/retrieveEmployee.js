const db = require('../config/connection.js');

async function retrieveEmployee (response) {
    let employeeList;
    let returnValue = await db.promise().query
    (`SELECT * FROM employee`)
    .then((data) => {
        employeeList = data[0].map (data => {
            return {
                name: data.first_name + ` `+ data.last_name,
                value: data.id
            }
        })
        employeeList.push({name: 'NONE', value:0});
        return employeeList
    })
    .catch(err => {
        console.log(err)
    })
    return returnValue
};

module.exports = retrieveEmployee;