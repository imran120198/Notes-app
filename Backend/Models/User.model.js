const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: { type: Number },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = {
  UserModel,
};
