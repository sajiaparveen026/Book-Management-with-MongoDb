const express = require("express");
const {getAllBooks,getSingleBookById,getAllIssuedBook,addnewBook,updateBookById} = require("../controllers/book-controller")

const {UserModel , BookModel} = require("../Models/index");
const router = express.Router();

/*
     Route : /books
     Method : GET
     Description : get all books
     Access : public
     Parameters : none
*/

router.get("/",getAllBooks);

/*
     Route : /books/issued
     Method : GET
     Description :issue book
     Access : public
     Parameters : none
*/

router.get("/issued/by-user",getAllIssuedBook);
/*
     Route : /books/:id
     Method : GET
     Description : get the book by id
     Access : public
     Parameters : id
*/

router.get("/:id",getSingleBookById);

/*
     Route : /books
     Method : POST
     Description :creating/adding a new book
     Access : public
     Parameters : none
*/
router.post("/", addnewBook);

/*
     Route : /books/:id
     Method : PUT
     Description :updating book by id
     Access : public
     Parameters : id
*/
router.put("/updateBook/:id",updateBookById );

module.exports = router;