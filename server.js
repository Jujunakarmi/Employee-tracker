//Imports
const db = require('./config/connection.js')
const selectTask = require('./lib/selectTask.js')

//Connection to database/handles error
db.connect( err => {
    if(err) throw err;
    console.log('Database connected.');
    init(); 
});

function init () {
    //displayText()
    selectTask()
};