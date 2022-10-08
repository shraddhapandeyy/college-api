// library routes
// import express from 'express';
// import { addLibrary, deleteLibrary, getLibrary, getLibrarys, updateLibrary } from '../controllers/Librarys.js';
const express = require("express");
const {
  getBooks,
  getBook,
  addBook,
  deleteBook,
  updateBook,
} = require("../controllers/Librarys.js");

const router = new express.Router();

// Do crud operations here
let Librarys = [];

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.patch("/:id", updateBook);

module.exports = router;
