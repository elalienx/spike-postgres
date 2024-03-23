// Node modules
import express, { request, response } from "express";

// Project files
import getAssignments from "./endpoints/getAssignments.js";
import getCandidatesByAssignmentId from "./endpoints/getCandidatesByAssigmentId.js";
import getSetupTables from "./endpoints/getSetupTables.js";
import postAssignment from "./endpoints/postAssignment.js";
import postCandidate from "./endpoints/postCandidate.js";

// Properties
const port = 8000;
const app = express();

// Start server
app.use(express.json());
app.listen(port, () => console.log(`Server started on port ${port}`));

// Routes
// -- assigmnents
app.get("/assignments", async (request, response) => getAssignments(response));
app.post("/assignments", async (request, response) => postAssignment(request, response));

// -- candidates
app.get("/candidates/:assignment_id", (request, response) => getCandidatesByAssignmentId(request, response));
app.post("/candidates", (request, response) => postCandidate(request, response));

// -- admin
app.get("/setup-tables", async (request, response) => getSetupTables(response));
