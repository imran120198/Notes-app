const { Router } = require("express");
const bcrypt = require("bcrypt");

const { NotesModel } = require("../Models/Notes.model");

const notesController = Router();

notesController.get("/", async (req, res) => {
  const notes = await NotesModel.find({ _id: req.body.userId });
  res.send(notes);
});

notesController.post("/create", async (req, res) => {
  const { Heading, Notes, Tag } = req.body;
  const notes = new NotesModel({
    Heading,
    Notes,
    Tag,
  });
  try {
    await notes.save();
    res.send("notes created");
  } catch (err) {
    res.send("Something went wrong");
  }
});

module.exports = {
  notesController,
};
