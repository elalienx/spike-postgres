// Project files
import pool from "../database.js";

export default async function getCandidatesByAssigmentId(request, response) {
  const { assignment_id } = request.params;
  const query = `SELECT * FROM candidates WHERE assignment_id ${assignment_id}`;

  try {
    const { rows } = await pool.query(query);

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
