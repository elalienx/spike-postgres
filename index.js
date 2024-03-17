// Node modules
import express from "express";

// Properties
const port = 1337;
const app = express();

// Routes
app.get("/", (request, response) => response.sendStatus(200));

// Start server
app.listen(port, () => console.log(`Server started on ${port}`));
