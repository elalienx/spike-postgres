// Node modules
import pkg from "pg";

// Properties
const { Pool } = pkg;
const pool = new Pool({
  host: "db",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "postgres",
});

export default pool;
