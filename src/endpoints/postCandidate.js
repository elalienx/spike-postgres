/**
 * About:
 * This is a debug endpoint.
 * The real project uses parse linked in links to add canddiates.
 */

// Project files
import pool from "../database.js";

export default async function postCandidate(request, response) {
  const data = [
    request.body.assignment_id,
    request.body.linked_in_url,
    request.body.candidate_name,
    request.body.candidate_job_title,
    request.body.candidate_image_url,
    request.body.company_name,
    request.body.company_duration_in_months,
    request.body.company_image_url,
    request.body.notes,
    request.body.relevance,
    request.body.contact_status,
    request.body.contact_date,
  ];
  const query = `INSERT INTO candidates (
        assignment_id,
        linked_in_url,
        candidate_name,
        candidate_job_title,
        candidate_image_url,
        company_name,
        company_duration_in_months,
        company_image_url,
        notes,
        relevance,
        contact_status,
        contact_date
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
  const message = "Postgres added new debug candidate";

  try {
    await pool.query(query, data);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
