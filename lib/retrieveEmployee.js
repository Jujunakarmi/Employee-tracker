const db = require('../config/connection.js');

async function retrieveEmployee (response) {
    let employeelist;
    let returnValue = await db.promise().query
    ('SELECT * FROM employee')
    .then((data) => {
        employeelist = data[0].map (data => {
            return {
                name: data.first_name + ' '+ data.last_name,
                value: data.id
            }
        })
        employeelist.push({name: 'NONE', value:0});
        return employeelist
    })
    .catch(err => {
        console.log(err)
    })
    return returnValue
};

module.exports = retrieveEmployee;