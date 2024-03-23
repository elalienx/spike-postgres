// Project files
import pool from "../database.js";

/**
 * Todo:
 * - add query for table candidates
 * - add query for table error_reports
 * - decide if we want to use a ORM like sequalizer for the schemas (maybe not because I only have 3 tables)
 */
export default async function getSetupTable(response) {
  const queyAssignments = `CREATE TABLE IF NOT EXISTS assignments(
    id SERIAL PRIMARY KEY, 
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assignment_name VARCHAR(50),
    company_name VARCHAR(50),
    company_image_url VARCHAR(255)
  )`;
  const queryCandidates = `CREATE TABLE IF NOT EXISTS candidates(
    id SERIAL PRIMARY KEY,
    assignment_id INTEGER REFERENCES assignments(id),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    linked_in_url VARCHAR(100),
    candidate_name VARCHAR(50),
    candidate_job_title VARCHAR(50),
    candidate_image_url VARCHAR(255),
    company_name VARCHAR(50),
    company_duration_in_months SMALLINT,
    company_image_url VARCHAR(255),
    notes TEXT,
    relevance SMALLINT,
    contact_status SMALLINT,
    contact_date TIMESTAMP
  )`;
  const message = "Postgres initialized table assigments";

  try {
    await pool.query(queyAssignments);
    await pool.query(queryCandidates);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
