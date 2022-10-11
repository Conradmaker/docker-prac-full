import mysql from "mysql2";

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "l1484418",
  database: "myapp",
});
