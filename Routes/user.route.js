const express = require("express");
const { UserModel } = require("../Model/user.module");

const UserRoute = express.Router();

UserRoute.get("/", async (req, res) => {
  const data = await ChatModel.find();
  res.status(200).send({ data });
});

UserRoute.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const data = new UserModel(payload);
    await data.save();
    res.send({ msg: "create data add" });
  } catch (error) {
    res.send({ msg: "something wrong", error: error.message });
  }
});

module.exports = { UserRoute };
