const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { UserModel } = require("../Models/User.model");
const userController = Router();

userController.post("/signup", (req, res) => {
  const { email, password, age } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.send("Something Went wrong");
    }
    const user = new UserModel({
      email,
      password: hash,
      age,
    });
    await user.save();
    res.send("Signup Successfull");
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body; // collect value from frontend
  const user = await UserModel.findOne({ email }); // finding the correct credential
  const hash = user.password; // comparing password
  bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      res.send("Something Went wrong");
    }
    if (result) {
      //Incase password match
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.send({ message: "Login Successfull", token });
    } else {
      //Incase of error
      res.send("Invalid Credentials");
    }
  });
});

module.exports = {
  userController,
};
