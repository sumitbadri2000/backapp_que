const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  text: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
