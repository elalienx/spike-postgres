// Project files
import pool from "../database.js";

/**
 * Todo:
 * - add query for table candidates
 * - add query for table error_reports
 * - decide if we want to use a ORM like sequalizer for the schemas (maybe not because I only have 3 tables)
 */
export default async function getSetupTable(response) {
  const query = `CREATE TABLE IF NOT EXISTS assignments (
    id SERIAL PRIMARY KEY, 
    date_created TIMESTAMP DEFAULT CURRENT_DATE,
    assignment_name VARCHAR(50),
    company_name VARCHAR(50),
    company_image_url VARCHAR(255)
  )`;
  const message = "Postgres initialized table assigments";

  try {
    await pool.query(query);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
