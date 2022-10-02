// importing faculty model
const User = require("../models/faculty.model");


// function to get all faculties
exports.getFacultys = async (req, res, next) => {

  try {

    //finding all faculties
    const faculties = await User.find();
    return res.json(faculties);

  } catch (error) {
    return res.status(400).send("Some Error Occured")
  }
};


// function to add new faculty
exports.addFaculty = async (req, res, next) => {

  // checking if any empty field
  const body = req.body;
  if (!body.name || !body.username || !body.image || !body.subjects) {
    return res.status(400).send("Please Provide All the details of the Faculty");
  }

  // storing body data
  const name = body.name;
  const username = body.username;
  const image = body.image;
  const subjects = body.subjects;

  try {

    // creating new Faculty 
    await User.create({ name, username, image, subjects });
    return res.status(200).send("Faculty Sucessfully Added to Database");

  } catch (error) {
    return res.status(400).send("Some Error Occured")
  }
};



// get particular faculty 
exports.getFaculty = async (req, res, next) => {

  // extracting id from url
  const { id } = req.params;

  try {

    // finding user with id 
    const faculty = await User.findById(id);
    return res.json(faculty)

  } catch (error) {
    res.status(400).send("Some error occured");

  }

};

// deleting faculty from database
exports.deleteFaculty = async (req, res, next) => {

  const { id } = req.params;

  try {

    // finding and deleting user with that id
    await User.findByIdAndDelete(id);
    return res.status(200).send("Faculty deleted from database  successfuly");

  } catch (error) {
    res.status(400).send("Some error occured");
  }

};

// updating faculty
exports.updateFaculty = async (req, res, next) => {

  const { id } = req.params;

  const body = req.body;
  if (!body.name || !body.username || !body.image || !body.subjects) {
    return res.status(400).send("Please Provide All the details of the Faculty");
  }

  
  const name = body.name;
  const username = body.username;
  const image = body.image;
  const subjects = body.subjects;

  try {

    // finding  and updating  user with that id
    await User.findByIdAndUpdate(id, {name, username, image, subjects}) ;
    return res.status(200).send("Faculty updated  successfuly");

  } catch (error) {
    res.status(400).send("Some error occured");
  }

};
