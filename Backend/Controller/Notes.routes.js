const { Router } = require("express");
const bcrypt = require("bcrypt");

const { NotesModel } = require("../Models/Notes.model");

const notesController = Router();

module.exports = {
    notesController,
};
