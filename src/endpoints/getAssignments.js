// Project files
import pool from "../database.js";

export default async function getAssignments(response) {
  const query = "SELECT * FROM assignments";

  try {
    const { rows } = await pool.query(query);

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
