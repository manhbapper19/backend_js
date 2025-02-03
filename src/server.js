require('dotenv').config()
const express = require('express') //commonJS
const configViewEngine = require('./config/viewEngine') 
const webRouter = require('./routes/web')

const mysql = require('mysql2')

const app = express() //app express
const port = process.env.PORT || 8888//port => hardcode
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRouter)

//test connect mysql
// Create the connection to database
async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
  });

  // simple query
  connection.query(
    'SELECT * from Users u',
    function(err, results, fields) {
      console.log(">>> results= ", results); // results contains rows returned by server
      console.log(">>> fields= ", fields); // fields contains extra meta data about results, if available
    }
  );
}

connectToDatabase();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
