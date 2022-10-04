const Library = require("../models/library.model");

exports.getBooks = async (req, res, next) => {
  try {
    //finding all Books
    const books = await Library.books.find();
    return res.json(books);

  } catch (error) {
    return res.status(400).send("Some Error Occured")
  }
};

exports.getBook = async (req, res) => {
  console.log("get book from library");
};

exports.addBook = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send("Please send book details");
  }
  // storing body data
  const name = body.name;
  const id = body.id;
  const author = body.author;
  // const patron = body.patron;          /* patron can only be added after book is added. In updateBook */
  try {
    // creating new Faculty 
    await Library.create({
      books: {
        name, id, author
      }
    });
    return res.status(200).send("Book Sucessfully Added to Database");
  } catch (error) {
    return res.status(400).send("Some Error Occured")
  }
};

exports.deleteBook = async (req, res, next) => {
  console.log("deleting book from library");
};

exports.updateBook = async (req, res, next) => {
  console.log("updating book in library");
};


// Members ---

exports.getMembers = async (req, res, next) => {
  console.log("gettin all members from library");
};
exports.getMember = async (req, res, next) => {
  console.log("deleting member info from library");
};
exports.addMember = async (req, res, next) => {
  console.log("adding member to library");
};
exports.deleteMember = async (req, res, next) => {
  console.log("deleting member from library");
};
exports.updateMember = async (req, res, next) => {
  console.log("updating member details in library");
};
