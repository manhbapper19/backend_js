require('dotenv').config()
const express = require('express') //commonJS
const configViewEngine = require('./config/viewEngine') 
const webRouter = require('./routes/web')
const connection = require('./config/database')

const app = express() //app express
const port = process.env.PORT || 8888//port => hardcode
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRouter)

//test connect mysql
// simple query
connection.query(
  'SELECT * from Users u',
  function(err, results, fields) {
    console.log(">>> results= ", results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
