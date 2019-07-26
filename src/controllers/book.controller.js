const Book = require("../models/book.model");

exports.findOne = (req, res, next) => {
  Book.findById(req.params.bookId)
    .then(book => {
      if (!book) res.status(404).json({ message: "Not found" });
      else res.json(book);
    })
    .catch(error => next(error));
};

exports.create = (req, res, next) => {
  if (!req.body.title || !req.body.author)
    return res
      .status(400)
      .json({ message: "Missing fields. Please include 'title' & 'author'" });

  console.log(req.user.id);
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    coverUrl: req.body.coverUrl,
    addedBy: req.user.id
  });

  return book
    .save()
    .then(doc => res.json(doc))
    .catch(error => next(error));
};
