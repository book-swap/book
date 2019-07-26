const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: Number
  },
  description: {
    type: String
  },
  coverUrl: {
    type: String
  }
});

module.exports = mongoose.model("Book", BookSchema);
