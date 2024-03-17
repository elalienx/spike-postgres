export default async function getSetupTable(request, response, pool) {
  const query =
    "CREATE TABLE IF NOT EXISTS assigments (id SERIAL PRIMARY KEY, assigment_name VARCHAR(100), company_name VARCHAR(100))";
  const message = "Postgres initialized table assigments";

  try {
    await pool.query(query);
    response.status(200).send({ message: message });
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}
