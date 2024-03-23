// Node modules
import pkg from "pg";

// Properties
const { Pool } = pkg;
const pool = new Pool({
  host: "database",
  port: 5432,
  database: "database123",
  user: "user123",
  password: "password123",
});

export default pool;
