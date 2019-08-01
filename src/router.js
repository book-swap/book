const router = require("express").Router();
const bookController = require("./controllers/book.controller");

router.get("//me", bookController.findMyBooks);
router.get("//:bookId", bookController.findOne);
router.delete("//:bookId", bookController.deleteOne);
router.get("/", bookController.findAll);
router.post("/", bookController.create);

module.exports = router;
