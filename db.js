const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 20,
    host : 'localhost',
    user : 'root',
database: "phoneweb",
    password : 12345
});
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Connection refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = pool;