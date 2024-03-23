// Project files
import pool from "../database.js";
import { assignments } from "../schemas/assignments.js";
import { candidates } from "../schemas/candidates.js";

/**
 * Todo:
 * - add query for table error_reports
 */
export default async function getSetupTable(response) {
  const message = "Postgres initialized tables";

  try {
    await pool.query(assignments);
    await pool.query(candidates);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
