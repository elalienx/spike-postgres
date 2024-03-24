// Project files
import { assignments } from "../schema/assignments.js";
import { candidates } from "../schema/candidates.js";
import { errorLogs } from "../schema/errorLogs.js";

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
