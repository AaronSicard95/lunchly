/** Database for lunchly */

const pg = require("pg");
const {Client} = require("pg");

let db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'lunchly',
    password: 'postgres',
    port: 5432 
});

db.connect();

module.exports = db;
