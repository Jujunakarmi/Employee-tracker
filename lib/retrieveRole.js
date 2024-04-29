const db = require ('../config/connection.js');

async function retrieveRole (response) {
    let rolelist;
    let returnedValue = await db.promise().query
    ('SELECT * FROM role')
    .then ((data) => {
        rolelist = data[0].map(data => {
            return {
                name: data.title,
                value: data.id
            }
        })
        return rolelist
    })
    .catch(err => {
        console.log(err);
    })
    return returnedValue
};

module.exports = retrieveRole;