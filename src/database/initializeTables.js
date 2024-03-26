// Project files
import { assignments } from "../schema/assignments.js";
import { candidates } from "../schema/candidates.js";
import { errorLogs } from "../schema/errorLogs.js";

export default async function initializeTables(database) {
  const message = "Postgres initialized tables";

  try {
    await database.query(assignments);
    await database.query(candidates);
    await database.query(errorLogs);
    console.info(message);
  } catch (error) {
    throw new Error(error);
  }
}
