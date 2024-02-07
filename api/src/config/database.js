const mysql = require('mysql');
const dotenv = require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

exports.Query = async (query, values) => {
  return await new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) { reject(err) }
      connection.query(query, values, (err, results, fields) => {
        resolve(results);
        connection.release();
        if (err) { reject(err) }
      })
    })
  })
}