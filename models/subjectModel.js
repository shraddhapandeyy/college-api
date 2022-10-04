// subject model
const mongoose = require("mongoose");


const SubjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    books: [
        {
          name: String,
          id: {
            type: String,
            required: true,
            unique: true,
          },
          author: String
        }
      ],
    mentors: [
      {
        type: String,
      }
    ],
    syllabus: [
        {
          type: String,
        }
      ]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Subject = mongoose.model("Subject", SubjectSchema);
module.exports = Subject; 
