const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model("User", UserSchema);
