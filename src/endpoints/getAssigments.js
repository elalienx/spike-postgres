export default async function getAssigments(request, response, pool) {
  const query = "SELECT * FROM assigments";
  let data = {};

  try {
    data = await pool.query(query);
    response.status(200).send(data.rows);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}
