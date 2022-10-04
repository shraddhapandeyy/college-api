const mongoose = require("mongoose");


const FacultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      default: "",
    },
    subjects: [
      {
        type: String,
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model("Faculty", FacultySchema);
module.exports = User; 
