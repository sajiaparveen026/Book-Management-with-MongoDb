const express = require("express");
const dotenv = require("dotenv");

const DbConnection = require("./databaseConnection.js");

dotenv.config();
const app = express();
DbConnection();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running :-)",
    data: "hey",
  });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });