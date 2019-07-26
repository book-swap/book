const router = require("express").Router();
const bookController = require("./controllers/book.controller");

router.get("/:bookId", bookController.findOne);
router.post("/", bookController.create);

module.exports = router;
