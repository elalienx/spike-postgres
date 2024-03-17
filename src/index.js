// Node modules
import express from "express";

// Project files
import getSetupTable from "./endpoints/getSetupTable.js";
import getAssigments from "./endpoints/getAssigments.js";
import postAssigment from "./endpoints/postAssigment.js";

// Properties
const port = 8000;
const app = express();

// Start server
app.use(express.json());
app.listen(port, () => console.log(`Server started on ${port}`));

// Routes
app.get("/setup-table", async (request, response) => getSetupTable(response));
app.get("/", async (request, response) => getAssigments(response));
app.post("/", async (request, response) => postAssigment(request, response));
