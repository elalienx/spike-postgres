// Node modules
import express from "express";

// Project files
import pool from "./database.js";
import getSetupTable from "./endpoints/getSetupTable.js";
import getAssigments from "./endpoints/getAssigments.js";
import postAssigment from "./endpoints/postAssigment.js";

// Properties
const port = 8000;
const app = express();

// Setup
app.use(express.json());

// Routes
app.get("/setup-table", async (req, res) => getSetupTable(req, res, pool));
app.get("/", async (req, res) => getAssigments(req, res, pool));
app.post("/", async (req, res) => postAssigment(req, res, pool));

// Start server (check if i can put it before routes)
app.listen(port, () => console.log(`Server started on ${port}`));
