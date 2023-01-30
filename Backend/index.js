const express = require("express");

const { userController } = require("./Controller/user.routes");
const { notesController } = require("./Controller/Notes.routes");
const { connection } = require("./Config/db");
const { authentication } = require("./Middleware/Authentication");
const PORT = 8080;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.use("/user", userController);

app.use(authentication);

app.use("/notes", notesController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log("Not connected to database");
    console.log(err);
  }
  console.log(`Listing in ${PORT}`);
});
