const express = require("express");
const {getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById,deleteBook} = require("../controllers/book-controller");
const { UserModel, BookModel } = require("../models");

const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all the books
 * Access: Public
 * Parmanters: none
 */

router.get("/", getAllBooks);

/**
 * Route: /books/:id
 * Method: GET
 * Description: Get book by thier id
 * Access: Public
 * Parmanters: id
 */
router.get("/:id", getSingleBookById);

/**
 * Route: /books/issued/by-user
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parmanters: none
 */
router.get("/issued", getAllIssuedBooks);

/**
 * Route: /books
 * Method: POST
 * Description: Create new book
 * Access: Public
 * Parmanters: none
 */
router.post("/", addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book
 * Access: Public
 * Parmanters: id
 */
router.put("/:id", updateBookById);

router.delete("/:id",deleteBook);

module.exports = router;
