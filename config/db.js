const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "examuser",      
  password: "exampass",  
  database: "exam1",     
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
