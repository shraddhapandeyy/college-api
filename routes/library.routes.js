// import express from 'express';
// import { addLibrary, deleteLibrary, getLibrary, getLibrarys, updateLibrary } from '../controllers/Librarys.js';
const express = require("express");
const {
  addLibrary,
  deleteLibrary,
  getLibrary,
  getLibrarys,
  updateLibrary,
} = require("../controllers/Librarys.js");

const router = express.Router();

// Do crud operations here
let Librarys = [];

router.get("/", getLibrarys);
router.get("/:id", getLibrary);
router.post("/", addLibrary);
router.delete("/:id", deleteLibrary);
router.patch("/:id", updateLibrary);

module.exports = router;
