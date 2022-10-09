// classes routes

const express = require("express");
const {
  getClasses,
  getClass,
  addClass,
  deleteClass,
  updateClass,
} = require("../controllers/Classes.js");

const router = new express.Router();

router.get("/",  getClasses);
router.get("/:id", getClass);
router.post("/",  addClass);
router.delete("/:id", deleteClass);
router.patch("/:id",   updateClass);

module.exports = router;
