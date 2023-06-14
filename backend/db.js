var mysql = require("mysql2");
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'eljoe',
    database: 'myapp',
});

exports.pool = pool;