const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  Heading: { type: String, required: true },
  Notes: { type: String, required: true },
  Tag: { type: String, required: true },
});

const NotesModel = mongoose.model("notes", NotesSchema);

module.exports = {
  NotesModel,
};
