const connection = require('../config/database')


const getHomePage = (req, res) => {
    //process data
    //call model
    let users = [];

    connection.query(
  'SELECT * from Users u',
function(err, results, fields) {
        users = results;
        console.log(">>> results= ", results); // results contains rows returned by server
        res.send(JSON.stringify(users))
    }
);
    
}
const getABC = (req, res) => {
    res.send('Check abc!')
}   
const getManhbapper = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomePage, getABC, getManhbapper
}