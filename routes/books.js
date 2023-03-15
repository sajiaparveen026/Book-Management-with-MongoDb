const express = require("express");
const {getAllBooks,getSingleBookById,getAllIssuedBook} = require("../controllers/book-controller")

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
router.post("/", (req, res) => {
  const { id, name, author, genre, price, publisher } = req.body;
  const book = books.find((each) => each.id === id);
  if (book) {
    return res.status(404).json({
      success: false,
      message: "Book Exists",
    });
  }
  books.push({
    id,
    name,
    author,
    genre,
    price,
    publisher,
  });

  return res.status(201).json({
    success: true,
    message: "Book updated",
    data: books,
  });
});

/*
     Route : /books/:id
     Method : PUT
     Description :updating book by id
     Access : public
     Parameters : id
*/
router.put("/updateBook/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const book = books.find((each) => each.id == id);
  if (!book) {
    return res
      .status(404)
      .json({ success: false, message: "Book does not exists" });
  }
  const updatedBookdata = books.map((each) => {
    if (each.id == id) {
      return {
        ...each,
        ...data,
      };
      return each;
    }
  });
  return res.status(200).json({
    success: true,
    message: "Information Updated",
    data: updatedBookdata,
  });
});

module.exports = router;