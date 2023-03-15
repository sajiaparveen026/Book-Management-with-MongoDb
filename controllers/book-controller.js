const {UserModel , BookModel} = require("../Models/index");

exports.getAllBooks = async(req,res) => {
    const books = await BookModel.find();

    if(books.length === 0)
    {
        return res.status(404).json({
            success : false,
            message : "No Book Found"
        })
    }

    res.status(200).json({
        success:true,
        message : "The book is found",
        data:books,
    })
};

exports.getSingleBookById = async(req,res) => {
    const {id} = req.params;
    const book = await BookModel.findById(id);
    if (!book) {
        return res.status(404).json({
          success: false,
          message: "Book does not exist",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Book found by their Id",
        data: book,
      });
};

exports.getAllIssuedBook = async(req,res) =>{
    const users = await UserModel.find({
        issuedBook : {$exists : true}
    }).populate("issuedBook");

    //const issuedBooks = users.map((each)=> new issuedBook(each))
    if (issuedBooks.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Book does not issued",
        });
      }
      return res.status(200).json({
        success: true,
        message: "User With the issued books...",
        data: issuedBook,
      });   
}
//module.exports = {getAllBooks,getSingleBookById};