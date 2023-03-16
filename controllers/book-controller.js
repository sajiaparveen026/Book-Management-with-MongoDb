const {UserModel , BookModel} = require("../Models/index");
//const issuedBook = require("../dtos/book-dto");
const IssuedBook = require("../dtos/book-dto");

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

   //D T O -> data transfer Object
   const issuedBooks = users.map((each)=> new IssuedBook(each));
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

exports.addnewBook = async(req,res) => {
 const {data} = req.body;
 if(!data){
  return res.status(400).json({
    success:false, message:"No Data to Add A Book",
  });
 }
 await BookModel.create(data);
 const allBooks = await BookModel.find();
 
  return res.status(201).json({
    success: true,
    message: "Book updated", 
    data: allBooks,
   });
}

exports.updateBookById = async(req,res) =>{
  const {id} = req.params;
  const { data } = req.body;
  const updateBook = await BookModel.findOneAndUpdate({
    _id : id,
  },data , {
    new : true,
  })
  return res.status(201).json({
    success: true,
    message: "Book updated by their id", 
    data: updateBook,
   });
}
//module.exports = {getAllBooks,getSingleBookById};