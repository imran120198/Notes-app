const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { NoteModel } = require("../Models/Notes.model");

const notesController = Router();

notesController.get("/", async (req, res) => {
  const { tag } = req.query;
  const notes = await NoteModel.find({ userId: req.body.userId, tag });
  res.send(notes);
});

notesController.post("/create", async (req, res) => {
  const { Heading, Note, Tag, userId } = req.body;
  const note = new NoteModel({
    Heading,
    Note,
    Tag,
    userId,
  });
  try {
    await note.save();
    res.send("note created");
  } catch (err) {
    res.send("something went wrong");
  }
});

notesController.delete("/delete/:noteId", async (req, res) => {
  const { noteId } = req.params;
  const deletedNote = await NoteModel.findOneAndDelete({
    _id: noteId,
    userId: req.body.userId,
  });
  if (deletedNote) {
    res.status(200).send("Deleted");
  } else {
    res.send("couldn't delete");
  }
});

notesController.patch("/edit/:noteId", async (req, res) => {
  const { noteId } = req.params;
  const deletedNote = await NoteModel.findOneAndUpdate(
    { _id: noteId, userId: req.body.userId },
    req.body
  );
  if (deletedNote) {
    res.send("Deleted");
  } else {
    res.send("couldn't delete");
  }
});

module.exports = {
  notesController,
};
