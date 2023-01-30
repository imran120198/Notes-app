const { Router } = require("express");
const bcrypt = require("bcrypt");

const { NotesModel } = require("../Models/Notes.model");

const notesController = Router();

notesController.get("/", (req, res) => {
  res.send("Notes");
});

module.exports = {
  notesController,
};
