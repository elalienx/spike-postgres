// Node modules
import pkg from "pg";

// Properties
const { Client } = pkg;
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "postgres",
});

export default client;
