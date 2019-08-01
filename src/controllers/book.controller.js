const Book = require("../models/book.model");

exports.findOne = (req, res, next) => {
  Book.findById(req.params.bookId)
    .then(book => {
      if (!book) res.status(404).json({ message: "Not found" });
      else {
        const returnedBook = book;
        // returnedBook.addedBy = undefined;
        res.json(returnedBook);
      }
    })
    .catch(error => next(error));
};

// Retrieve all Books
exports.findAll = (req, res, next) => {
  Book.find()
    .then(books => {
      res.send(books);
    })
    .catch(error => next(error));
};

exports.findMyBooks = (req, res, next) => {
  Book.find({ addedBy: req.user.id })
    .then(books => {
      res.send(books);
    })
    .catch(error => next(error));
};

exports.create = (req, res, next) => {
  if (!req.body.title || !req.body.author)
    return res
      .status(400)
      .json({ message: "Missing fields. Please include 'title' & 'author'" });

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    rating: req.body.rating,
    description: req.body.description,
    coverUrl: req.body.coverUrl,
    addedBy: req.user.id
  });

  return book
    .save()
    .then(doc => res.json(doc))
    .catch(error => next(error));
};
