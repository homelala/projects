const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password :'passwd',
    database:'good'
})
db.connect();
module.exports = db;