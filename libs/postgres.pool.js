const { Pool } = require("pg")

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user:'Jonathan',
  password:'admin123',
  database:'postgres'
});



module.exports = pool;
