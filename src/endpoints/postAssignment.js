export default async function postAssignment(request, response, database) {
  const { assignment_name, company_name, company_image_url } = request.body;
  const data = [assignment_name, company_name, company_image_url];
  const query = `INSERT INTO assignments (
    assignment_name, 
    company_name, 
    company_image_url
  ) 
  VALUES ($1, $2, $3)`;
  const message = "Postgres added new assignment";

  try {
    await database.query(query, data);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
