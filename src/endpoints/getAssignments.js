export default async function getAssignments(response, database) {
  const query = "SELECT * FROM assignments";

  try {
    const { rows } = await database.query(query);

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
