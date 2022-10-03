// import facultyRoutes from "./routes/faculty.routes.js";
// ;import libraryRoutes from "./routes/library.routes.js";
const facultyRoutes = require("./routes/facultyRoutes.js");
const libraryRoutes = require("./routes/libraryRoutes.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();



const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/faculty", facultyRoutes);
app.use("/library", libraryRoutes);

var DB_URI = "mongodb://localhost:27017/"

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT} \nDatabase connected`));
  })
  .catch((err) => console.log(err.message));

