const router = require("express").Router();
const bookController = require("./controllers/book.controller");

router.get("/:bookId", bookController.findOne);
router.get("/", bookController.findAll);
router.post("/", bookController.create);
router.get("//me", bookController.findMyBooks);

module.exports = router;
