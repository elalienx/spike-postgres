// Node modules
import pkg from "pg";

// Properties
const { Pool } = pkg;
const credentials = {
  host: "database",
  port: 5432,
  database: "database123",
  user: "user123",
  password: "password123",
};
const pool = new Pool(credentials);

try {
  pool.connect();
  console.info(`Posgress server started on port ${credentials.port}`);
} catch (error) {
  if (error.err === -3008) console.error("Check if your enviroment has Postgres server");
  console.error(error);
}

export default pool;
