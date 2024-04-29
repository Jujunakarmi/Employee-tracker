const db = require('../config/connection');

async function retreiveDepartments(response){
    let departmentlist;
    let returnedValue =await db.promise().query('SELECT * FROM department')
    .then((data) => {
        departmentlist = data[0].map( data => {
            return{
                name: data.name,
                value: data.id
            }
        })
        return departmentlist
    })
    .catch(err => {
        console.log(err);
    })
    return returnedValue
   
};


module.exports = retreiveDepartments;
