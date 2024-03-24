// Project files
import { assignments } from "../schemas/assignments.js";
import { candidates } from "../schemas/candidates.js";
import { errorLogs } from "../schemas/errorLogs.js";

export default async function getSetupTables(response, database) {
  const message = "Postgres initialized tables";

  try {
    await database.query(assignments);
    await database.query(candidates);
    await database.query(errorLogs);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
