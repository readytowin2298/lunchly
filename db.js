/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    user : 'postgres',
    host : 'localhost',
    database : 'lunchly',
    port : 5432,
    password : 'test'
});

db.connect();

module.exports = db;
