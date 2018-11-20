const { pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool();

module.exports = pool;
