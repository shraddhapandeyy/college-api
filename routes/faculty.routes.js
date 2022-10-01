// import express from 'express';
// import { addFaculty, deleteFaculty, getFaculty, getFacultys, updateFaculty } from '../controllers/Facultys.js';
const express = require("express");
const {
  addFaculty,
  deleteFaculty,
  getFaculty,
  getFacultys,
  updateFaculty,
} = require("../controllers/Facultys.js");

const router = express.Router();

// Do crud operations here
let Facultys = [];

router.get("/", getFacultys);
router.get("/:id", getFaculty);
router.post("/", addFaculty);
router.delete("/:id", deleteFaculty);
router.patch("/:id", updateFaculty);

module.exports = router;
