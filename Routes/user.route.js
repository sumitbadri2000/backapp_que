const express = require("express");
require("dotenv").config();
const { UserModel } = require("../Model/user.module");

const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
  try {
    const chat = await UserModel.find();
    res.status(200).send({ message: "add chat", chat });
    console.log("res", chat);
  } catch (err) {
    res.status(401).send({
      message: "Error in your API request",
      error: err,
    });
  }
});

UserRouter.post("/add", async (req, res) => {
  try {
    const chat = new UserModel(req.body);
    await chat.save();
    res.status(200).send({ message: "chat Successfully added", chat });
  } catch (err) {
    res.status(401).send({
      message: "Error in adding",
      error: err,
    });
  }
});
module.exports = { UserRouter };
