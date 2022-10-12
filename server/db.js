import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "root",
  database: "myapp",
});
