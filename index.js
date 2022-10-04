// import facultyRoutes from "./routes/faculty.routes.js";
// ;import libraryRoutes from "./routes/library.routes.js";
const facultyRoutes = require("./routes/facultyRoutes.js");
const libraryRoutes = require("./routes/libraryRoutes.js");
const studentRoutes = require("./routes/studentRoutes.js");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sms'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/student", studentRoutes);
app.use("/faculty", facultyRoutes);
app.use("/library", libraryRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
