// import facultyRoutes from "./routes/faculty.routes.js";
// ;import libraryRoutes from "./routes/library.routes.js";
const facultyRoutes = require("./routes/faculty.routes.js");
const libraryRoutes = require("./routes/library.routes.js");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/faculty", facultyRoutes);
app.use("/library", libraryRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
