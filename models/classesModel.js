// classes model

const mongoose = require("mongoose");


const ClassSchema = new mongoose.Schema(
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
room:{type:String,
required:true},
    mentors: [
      {
        type: String,
      }
    ],
    date:
        {
          type: Date,
          required:true

        }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Class = mongoose.model("Class", ClassSchema);
module.exports = Class; 
