const mysql = require('mysql');
const db = mysql.createConnection({
    host:'gh-crm.c4s37qigob6j.ap-northeast-2.rds.amazonaws.com',
    user:'GHWoong',
    password :'lee28362836',
    database:'GoodHabit',
    port:3306
})
db.connect();
module.exports = db;