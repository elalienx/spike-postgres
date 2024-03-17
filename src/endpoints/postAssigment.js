export default async function postAssigment(request, response, pool) {
  const { assigment_name, company_name } = request.body;
  const query =
    "INSERT INTO assigments (assigment_name, company_name) VALUES ($1, $2)";
  const message = "Postgres added new assigment";

  try {
    await pool.query(query, [assigment_name, company_name]);
    response.status(200).send({ message: message });
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}
