// Project files
import pool from "../database.js";

export default async function postAssignment(request, response) {
  const { assignment_name, company_name } = request.body;
  const query =
    "INSERT INTO assigments (assignment_name, company_name) VALUES ($1, $2)";
  const message = "Postgres added new assignment";

  try {
    await pool.query(query, [assignment_name, company_name]);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
