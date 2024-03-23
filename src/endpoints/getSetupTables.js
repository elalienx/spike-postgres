// Project files
import pool from "../database.js";
import { assignments } from "../schemas/assignments.js";
import { candidates } from "../schemas/candidates.js";
import { errorLogs } from "../schemas/errorLogs.js";

export default async function getSetupTables(response) {
  const message = "Postgres initialized tables";

  try {
    await pool.query(assignments);
    await pool.query(candidates);
    await pool.query(errorLogs);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
