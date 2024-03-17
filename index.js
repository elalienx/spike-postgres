// Node modules
import express from "express";

// Project files
import pool from "./database.js";

// Properties
const port = 8000;
const app = express();

// Setup
app.use(express.json());

// Routes
app.get("/setup", async (request, response) => {
  const query =
    "CREATE TABLE assigments (id SERIAL PRIMARY KEY, assigment_name VARCHAR(100), company_name VARCHAR(100))";
  const message = "Postgres initialized table assigments";

  try {
    await pool.query(query);
    response.status(200).send({ message: message });
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
});

app.get("/", async (request, response) => {
  const query = "SELECT * FROM assigments";
  let data = {};

  try {
    data = await pool.query(query);
    response.status(200).send(data.rows);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
});

app.post("/", async (request, response) => {
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
});

// Start server
app.listen(port, () => console.log(`Server started on ${port}`));
