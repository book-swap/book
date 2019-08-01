const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  description: {
    type: String
  },
  coverUrl: {
    type: String
  },
  addedBy: {
    type: ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Book", BookSchema);
