const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    chat: { type: String },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("coffer", UserSchema);

module.exports = { UserModel };
