// Node modules
import express from "express";

// Project files
import getSetupTable from "./endpoints/getSetupTable.js";
import getAssignments from "./endpoints/getAssignments.js";
import postAssignment from "./endpoints/postAssignment.js";

// Properties
const port = 8000;
const app = express();

// Start server
app.use(express.json());
app.listen(port, () => console.log(`Server started on port ${port}`));

// Routes
app.get("/setup-table", async (request, response) => getSetupTable(response));
app.get("/", async (request, response) => getAssignments(response));
app.post("/", async (request, response) => postAssignment(request, response));
