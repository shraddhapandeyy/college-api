const express = require("express");
const {
  getSubjects,
  getSubject,
  addSubject,
  deleteSubject,
  updateSubject,
} = require("../controllers/Subjects.js");

const router = new express.Router();

router.get("/", getSubjects);
router.get("/:id", getSubject);
router.post("/",  addSubject);
router.delete("/:id", deleteSubject);
router.patch("/:id",   updateSubject);

module.exports = router;
