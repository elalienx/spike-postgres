// Node modules
import express from "express";

// Project files
import postgresPool from "./database/postgresPool.js";
import credentials from "./database/credentials.js";
import getAssignments from "./endpoints/getAssignments.js";
import getCandidatesByAssignmentId from "./endpoints/getCandidatesByAssigmentId.js";
import postAssignment from "./endpoints/postAssignment.js";
import postCandidate from "./endpoints/postCandidate.js";

// Properties
const port = 8000;
const database = await postgres(credentials);
const app = express();

// Start server
app.use(express.json());
app.listen(port, () => console.info(`Express server started on port ${port}`));

// Routes
// -- assigmnents
app.get("/assignments", (request, response) => getAssignments(response, database));
app.post("/assignments", (request, response) => postAssignment(request, response, database));

// -- candidates
app.get("/candidates/:assignment_id", (request, response) => getCandidatesByAssignmentId(request, response, database));
app.post("/candidates", (request, response) => postCandidate(request, response, database));
