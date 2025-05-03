const express = require("express");
const { getBooks, saveBook, getBook, updateBook, deleteBook } = require("../controller/bookController");

const router = express.Router();
router.get("/", getBooks);//for getting all of the books
router.post("/saveBook", saveBook); //for saving one book
router.get("/getBook/:id", getBook)  // for getting one books
router.put("/updateBook/:id", updateBook)//for updating book
router.delete("/deleteBook/:id", deleteBook)// for deleting book
module.exports = router;
