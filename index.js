// Node modules
import express, { response } from "express";

// Properties
const port = 1337;
const app = express();

// Setup
app.use(express.json());

// Routes
app.get("/", (request, response) => response.sendStatus(200));

app.post("/", (request, response) => {
  const { assigment_name, company_name } = request.body;

  response.status(200).send({
    message: `New assigment ${assigment_name} for ${company_name}`,
  });
});

// Start server
app.listen(port, () => console.log(`Server started on ${port}`));
